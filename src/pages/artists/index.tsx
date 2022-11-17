import type { GetServerSideProps, NextPage } from "next";
import ArtistList from "../../components/elements/list/artist";
import { Prisma, PrismaClient } from "@prisma/client";
import { createPaginator, PaginatedResult } from "prisma-pagination";
import DefaultIndexLayout from "../../components/layouts/index/default";
interface ArtistsProps {
	data: Prisma.ArtistGetPayload<{ include: { band: true } }>[]
	meta: PaginatedResult<null>["meta"]
}
const Artists: NextPage<ArtistsProps> = ({ data, meta }) => {
	return (
		<DefaultIndexLayout
			resource="artist"
			pathname="/artists"
			meta={meta}>
			<ArtistList artists={data} />
		</DefaultIndexLayout>
	)
}
export const getServerSideProps: GetServerSideProps<ArtistsProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
	const data = await paginate<Prisma.ArtistGetPayload<{ include: { band: true } }>, Prisma.ArtistFindManyArgs>(
		prisma.artist,
		{
			where: {
				name: { is: { ja: { contains: ctx.query.q as string } } }
			},
			include: { band: true }
		},
		{ page: ctx.query.page as string })
	return {
		props: { ...data },
	};
};

export default Artists;