import type { GetServerSideProps, NextPage } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import { createPaginator, PaginatedResult } from "prisma-pagination";
import IndexLayout, { IndexLayoutProps } from "../../components/layouts/index/default";
import ArtistList from "../../components/elements/list/artist";
import { getProviders } from "next-auth/react";
interface ArtistsProps extends Pick<IndexLayoutProps, "providers"> {
	data: Prisma.ArtistGetPayload<{ include: { bands: true } }>[]
	meta: PaginatedResult<null>["meta"]
}
const Artists: NextPage<ArtistsProps> = ({ providers, data, meta }) => {
	return (
		<IndexLayout
			providers={providers}
			resource="artist"
			route={{ pathname: "/artists" }}
			meta={meta}>
			<ArtistList artists={data} />
		</IndexLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const providers = await getProviders()
	const paginate = createPaginator({ perPage: 10 })
	const data = await paginate<Prisma.ArtistGetPayload<{ include: { bands: true } }>, Prisma.ArtistFindManyArgs>(
		prisma.artist,
		{
			where: {
				name: { is: { ja: { contains: ctx.query.q as string } } }
			},
			include: { bands: true }
		},
		{ page: ctx.query.page as string })
	return {
		props: { ...data, providers },
	};
};

export default Artists;