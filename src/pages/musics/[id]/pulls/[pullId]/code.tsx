import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import ReactDiffViewer from 'react-diff-viewer';
import MusicLayout from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";

const Code: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: pullData } = trpc.useQuery(["pull.show", { where: { id: router.query.pullId as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	if (!musicData || !pullData) return <></>
	return (
		<MusicLayout data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
			<PullLayout data={pullData} activeTab="code">
				<ReactDiffViewer oldValue={pullData.score.original} newValue={pullData.score.changed} />
			</PullLayout>
		</MusicLayout>
	)
}

export default Code