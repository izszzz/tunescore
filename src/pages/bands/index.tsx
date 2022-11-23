import type { GetServerSideProps, NextPage } from "next";
import BandList from "../../components/elements/list/band";
import { Prisma, PrismaClient } from "@prisma/client";
import { createPaginator, PaginatedResult } from "prisma-pagination";
import IndexLayout, { IndexLayoutProps } from "../../components/layouts/index/default";
import { getProviders } from "next-auth/react";

interface BandsProps extends Pick<IndexLayoutProps, "providers"> {
	data: Prisma.BandGetPayload<{ include: { _count: { select: { artists: true, musics: true } } } }>[]
	meta: PaginatedResult<null>["meta"]
}
const Bands: NextPage<BandsProps> = ({ data, meta, providers }) => {
	return (
		<IndexLayout
			providers={providers}
			resource="band"
			route={{ pathname: "/bands" }}
			meta={meta}>
			<BandList bands={data} />
		</IndexLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
	const providers = await getProviders()
	const data = await paginate<Prisma.BandGetPayload<{ include: { _count: { select: { artists: true, musics: true } } } }>, Prisma.BandFindManyArgs>(
		prisma.band,
		{
			where: {
				name: { is: { ja: { contains: ctx.query.q as string } } }
			},
			include: { _count: { select: { artists: true, musics: true } } }
		},
		{ page: ctx.query.page as string })
	return {
		props: { ...data, providers },
	};
};

export default Bands;