import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/show/music";
import PullList from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { Pull } from "@prisma/client";
const Issues: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	const { data: pullsData } = trpc.useQuery(["pull.index", {
		args: {
			include: { user: true },
			where: { title: { contains: router.query.q as string || "" }, music: { id: router.query.id as string } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}], { onError: () => { enqueueSnackbar("pull.index error") } })
	const search = trpc.useMutation(["pull.search"], { onError: () => { enqueueSnackbar("music.search error") } })
	if (!musicData || !pullsData) return <></>
	return (
		<MusicLayout data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
			<IndexLayout<Pull>
				meta={pullsData.meta}
				route={{ pathname: "/musics/[id]/pulls", query: { id: router.query.id as string } }}
				searchAutocompleteProps={{
					options: search.data || [],
					loading: search.isLoading,
					getOptionLabel: option => option.title,
					textFieldProps: {
						onChange: (e) => search.mutate({ where: { title: { contains: e.currentTarget.value }, music: { id: router.query.id as string } }, take: 10 })
					}
				}}
			>
				<PullList pulls={pullsData.data} />
			</IndexLayout>
		</MusicLayout >
	)
}


export default Issues;

