import { Issue } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import IndexLayout from "../../../../components/layouts/index";
import IssueList from "../../../../components/elements/list/issue";
import MusicLayout, { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
type MusicProps = Pick<MusicLayoutProps, "providers">
const Issues: NextPage<MusicProps> = ({ providers }) => {
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const { data: musicData } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: issueData } = trpc.useQuery(["issue.index", {
		args: {
			include: { user: true },
			where: { title: { contains: router.query.q as string || "" }, music: { id: router.query.id as string } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}], { onError: () => { enqueueSnackbar("music.show error") } })
	const search = trpc.useMutation(["issue.search"], { onError: () => { enqueueSnackbar("music.search error") } })
	if (!musicData || !issueData) return <></>
	return (
		<MusicLayout providers={providers} data={musicData} bookmarked={musicData.bookmarked} activeTab="issues">
			<IndexLayout<Issue>
				meta={issueData.meta}
				route={{ pathname: "/musics/[id]/issues", query: { id: router.query.id as string } }}
				searchAutocompleteProps={{
					options: search.data || [],
					loading: search.isLoading,
					getOptionLabel: option => option.title,
					textFieldProps: {
						onChange: (e) => search.mutate({ where: { title: { contains: e.currentTarget.value }, music: { id: router.query.id as string } }, take: 10 })
					}
				}}
			>
				<IssueList issues={issueData.data} />
			</IndexLayout>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Issues;