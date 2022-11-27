import React from "react";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MusicLayout, { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { Prisma } from "@prisma/client";
import { getProviders } from "next-auth/react";
import { trpc } from "../../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const Markdown = dynamic(
	() => import("@uiw/react-markdown-preview"),
	{ ssr: false }
);
interface MusicProps extends Pick<MusicLayoutProps, "providers" | "bookmarked"> {
	data: Prisma.MusicGetPayload<{
		include: {
			artists: true, band: true, composers: true, lyrists: true, user: true, pulls: {
				include: { music: true, user: true }
			}
		}
	}>
}
const Pull: NextPage<MusicProps> = ({ providers }) => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: pullData } = trpc.useQuery(["pull.show", { id: router.query.pullId as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	if (!musicData || !pullData) return <></>
	return (
		<MusicLayout providers={providers} data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
			<PullLayout data={pullData} activeTab="conversation">
				<Markdown source={pullData.body} />
			</PullLayout>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};
export default Pull