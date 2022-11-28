import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useSnackbar } from "notistack";
import DefaultIndexLayout from "../../components/layouts/index/default";
import MusicList from "../../components/elements/list/music";
import { trpc } from '../../utils/trpc';
import setLocale from "../../utils/setLocale";
import { Music } from "@prisma/client";
const Musics: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const search = trpc.useMutation(["music.search"], { onError: () => { enqueueSnackbar("music.search error") } })
	const { data } = trpc.useQuery(["music.index", {
		args: {
			include: { composers: true, lyrists: true, band: true, user: true },
			where: { title: { is: { [router.locale]: { contains: router.query.q as string || "" } } } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}], {
		onError: () => { enqueueSnackbar("music.index error") }
	})
	if (!data) return <></>
	return (
		<DefaultIndexLayout<Music>
			route={{ pathname: "/musics" }}
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
			<MusicList musics={data.data} />
		</DefaultIndexLayout >
	)
}


export default Musics;