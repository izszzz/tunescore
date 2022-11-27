import type { GetServerSideProps, NextPage } from "next";
import IndexLayout, { DefaultIndexLayoutProps } from "../../components/layouts/index/default";
import ArtistList from "../../components/elements/list/artist";
import { getProviders } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
type ArtistsProps = Pick<DefaultIndexLayoutProps, "providers">
const Artists: NextPage<ArtistsProps> = ({ providers }) => {
	const router = useRouter()
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
			providers={providers}
			resource="artist"
			route={{ pathname: "/artists" }}
			meta={data.meta}>
			<ArtistList artists={data.data} />
		</IndexLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Artists;