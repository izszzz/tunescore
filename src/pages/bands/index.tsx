import type { GetServerSideProps, NextPage } from "next";
import BandList from "../../components/elements/list/band";
import { Prisma, PrismaClient } from "@prisma/client";
import { createPaginator, PaginatedResult } from "prisma-pagination";
import DefaultIndexLayout from "../../components/layouts/index/default";

interface BandsProps {
	data: Prisma.BandGetPayload<{ include: { _count: { select: { artists: true, musics: true } } } }>[]
	meta: PaginatedResult<null>["meta"]
}
const Bands: NextPage<BandsProps> = ({ data, meta }) => {
	return (
		<DefaultIndexLayout
			resource="band"
			route={{ pathname: "/bands" }}
			meta={meta}>
			<BandList bands={data} />
		</DefaultIndexLayout>
	)
}

export const getServerSideProps: GetServerSideProps<BandsProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
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
		props: { ...data },
	};
};

export default Bands;