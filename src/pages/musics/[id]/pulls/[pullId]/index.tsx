import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MusicLayout from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const Markdown = dynamic(
	() => import("@uiw/react-markdown-preview"),
	{ ssr: false }
);
const Pull: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: pullData } = trpc.useQuery(["pull.show", { where: { id: router.query.pullId as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	if (!musicData || !pullData) return <></>
	return (
		<MusicLayout data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
			<PullLayout data={pullData} activeTab="conversation">
				<Markdown source={pullData.body} />
			</PullLayout>
		</MusicLayout>
	)
}

export default Pull