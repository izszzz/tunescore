import { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import ReactDiffViewer from 'react-diff-viewer';
import MusicLayout, { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";

type MusicProps = Pick<MusicLayoutProps, "providers">
const Code: NextPage<MusicProps> = ({ providers }) => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: pullData } = trpc.useQuery(["pull.show", { id: router.query.pullId as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	if (!musicData || !pullData) return <></>
	return (
		<MusicLayout providers={providers} data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
			<PullLayout data={pullData} activeTab="code">
				<ReactDiffViewer oldValue={pullData.score.original} newValue={pullData.score.changed} />
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
export default Code