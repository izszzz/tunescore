import React from "react";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MusicLayout, { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../../../server/common/get-server-auth-session";
import { getProviders } from "next-auth/react";

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
const Pull: NextPage<MusicProps> = ({ providers, data, bookmarked }) => {
	return (
		<MusicLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="pullrequests">
			<PullLayout data={data.pulls[0] as Prisma.PullGetPayload<{ include: { music: true, user: true } }>} activeTab="conversation">
				<Markdown source={data.pulls[0]?.body} />
			</PullLayout>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true, pulls: { where: { id: ctx.query.pullId as string }, include: { user: true, music: true } } } })
	const providers = await getProviders()
	if (!data) return { notFound: true }
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.music.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};
export default Pull