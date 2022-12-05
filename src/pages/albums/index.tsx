import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import BandList from "../../components/elements/list/band";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../utils/setLocale";

const Albums: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data } = trpc.useQuery(["album.index", {
		args: {
			include: { _count: { select: { artists: true, musics: true } } },
			where: { title: { is: { [router.locale]: { contains: router.query.q as string } } } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}])
	const search = trpc.useMutation(["album.search"], { onError: () => { enqueueSnackbar("music.search error") } })
	if (!data) return <></>
	return (
		<IndexLayout
			route={{ pathname: "/bands" }}
			meta={data.meta}
			searchAutocompleteProps={{
				options: search.data || [],
				loading: search.isLoading,
				getOptionLabel: option => setLocale(option.title, router) || "",
				textFieldProps: {
					onChange: (e) => search.mutate({ where: { title: { is: { [router.locale]: { contains: e.currentTarget.value } } } }, take: 10 })
				}
			}}
		>
			<BandList bands={data.data} />
		</IndexLayout>
	)
}



export default Albums;