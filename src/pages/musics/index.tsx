import { Prisma, PrismaClient } from '@prisma/client'
import { createPaginator, PaginatedResult } from 'prisma-pagination'
import type { GetServerSideProps, NextPage } from "next";
import IndexLayout, { IndexLayoutProps } from "../../components/layouts/index/default";
import MusicList from "../../components/elements/list/music";
import { Locale } from 'nextjs-routes';
import { getProviders } from 'next-auth/react';
interface MusicsProps {
	data: Prisma.MusicGetPayload<{ include: { user: true } }>[]
	meta: PaginatedResult<null>["meta"]
	providers: IndexLayoutProps["providers"]
}
const Musics: NextPage<MusicsProps> = ({ providers, data, meta }) => {
	return (
		<IndexLayout
			providers={providers}
			resource="music"
			route={{ pathname: "/musics" }}
			meta={meta}>
			<MusicList musics={data} />
		</IndexLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
	const providers = await getProviders()
	const data = await paginate<Prisma.MusicGetPayload<{ include: { user: true } }>, Prisma.MusicFindManyArgs>(
		prisma.music,
		{
			where: {
				title: { is: { [ctx.locale as Locale]: { contains: ctx.query.q as string } } }
			},
			include: { user: true }
		},
		{ page: ctx.query.page as string })
	return {
		props: { ...data, providers },
	};
};

export default Musics;