import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import IndexLayout from "../../../../components/layouts/index";
import IssueList from "../../../../components/elements/list/issue";
import MusicLayout from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
const Issues: NextPage = () => {
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const { data: musicData } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
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
		<MusicLayout data={musicData} bookmarked={musicData.bookmarked} activeTab="issues">
			<IndexLayout
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


export default Issues;