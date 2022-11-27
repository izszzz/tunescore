import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout, { MusicLayoutProps } from "../../../../components/layouts/show/music";
import PullList from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import { getProviders } from "next-auth/react";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { Pull } from "@prisma/client";
type MusicProps = Pick<MusicLayoutProps, "providers">
const Issues: NextPage<MusicProps> = ({ providers }) => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data: musicData } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
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
		<MusicLayout providers={providers} data={musicData} bookmarked={musicData.bookmarked} activeTab="pullrequests">
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
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Issues;

