import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from 'next/router';
import { getProviders } from 'next-auth/react';
import { useSnackbar } from "notistack";
import DefaultIndexLayout, { DefaultIndexLayoutProps } from "../../components/layouts/index/default";
import MusicList from "../../components/elements/list/music";
import { trpc } from '../../utils/trpc';
import setLocale from "../../utils/setLocale";
import { Music } from "@prisma/client";
type MusicsProps = Pick<DefaultIndexLayoutProps<Music>, "providers">
const Musics: NextPage<MusicsProps> = ({ providers }) => {
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
			providers={providers}
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

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Musics;