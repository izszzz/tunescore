import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import IndexLayout from "../../components/layouts/index/default";
import ArtistList from "../../components/elements/list/artist";
import { trpc } from "../../utils/trpc";
import setLocale from "../../utils/setLocale";
const Artists: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const search = trpc.useMutation(["artist.search"], { onError: () => { enqueueSnackbar("music.search error") } })
	const { data } = trpc.useQuery(["artist.index", {
		args: {
			include: { bands: true },
			where: { name: { is: { [router.locale]: { contains: router.query.q as string } } } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}])
	if (!data) return <></>
	return (
		<IndexLayout
			route={{ pathname: "/artists" }}
			meta={data.meta}
			searchAutocompleteProps={{
				options: search.data || [],
				loading: search.isLoading,
				getOptionLabel: option => setLocale(option.name, router) || "",
				textFieldProps: {
					onChange: (e) => search.mutate({ where: { name: { is: { [router.locale]: { contains: e.currentTarget.value } } } }, take: 10 })
				}
			}}
		>
			<ArtistList artists={data.data} />
		</IndexLayout>
	)
}

export default Artists;