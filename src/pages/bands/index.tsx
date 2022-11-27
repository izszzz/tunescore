import type { GetServerSideProps, NextPage } from "next";
import BandList from "../../components/elements/list/band";
import IndexLayout, { DefaultIndexLayoutProps } from "../../components/layouts/index/default";
import { getProviders } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";

type BandsProps = Pick<DefaultIndexLayoutProps, "providers">
const Bands: NextPage<BandsProps> = ({ providers }) => {
	const router = useRouter()
	const { data } = trpc.useQuery(["band.index", {
		args: {
			include: { _count: { select: { artists: true, musics: true } } },
			where: { name: { is: { [router.locale]: { contains: router.query.q as string } } } }
		},
		options: { page: router.query.page as string || 0, perPage: 12 }
	}])
	if (!data) return <></>
	return (
		<IndexLayout
			providers={providers}
			resource="band"
			route={{ pathname: "/bands" }}
			meta={data.meta}>
			<BandList bands={data.data} />
		</IndexLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Bands;