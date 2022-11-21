import { Prisma, PrismaClient } from '@prisma/client'
import { createPaginator, PaginatedResult } from 'prisma-pagination'
import type { GetServerSideProps, NextPage } from "next";
import DefaultIndexLayout from "../../components/layouts/index/default";
import MusicList from "../../components/elements/list/music";
import { Locale } from 'nextjs-routes';
interface MusicsProps {
	data: Prisma.MusicGetPayload<{ include: { user: true } }>[]
	meta: PaginatedResult<null>["meta"]
}
const Musics: NextPage<MusicsProps> = ({ data, meta }) => {
	return (
		<DefaultIndexLayout
			resource="music"
			route={{ pathname: "/musics" }}
			meta={meta}>
			<MusicList musics={data} />
		</DefaultIndexLayout>
	)
}

export const getServerSideProps: GetServerSideProps<MusicsProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
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
		props: { ...data },
	};
};

export default Musics;