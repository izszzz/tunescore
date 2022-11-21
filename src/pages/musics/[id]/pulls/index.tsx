import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/show/music";
import PullList from "../../../../components/elements/list/pull";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
import { createPaginator, PaginatedResult } from "prisma-pagination";
import DefaultIndexLayout from "../../../../components/layouts/index/default";
interface MusicProps {
	music: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true } }>
	data: Prisma.PullGetPayload<{
		include: {
			user: true,
		}
	}>[]
	meta: PaginatedResult<null>["meta"]
	bookmarked: boolean;
}
const Issues: NextPage<MusicProps> = ({ meta, data, music, bookmarked }) => {
	const router = useRouter()
	return (
		<MusicLayout data={music} bookmarked={bookmarked} activeTab="pullrequests">
			<DefaultIndexLayout
				resource="pull"
				route={{ pathname: "/musics/[id]/pulls", query: { id: router.query.id as string } }}
				meta={meta}>
				<PullList pulls={data} />
			</DefaultIndexLayout>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps<MusicProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const paginate = createPaginator({ perPage: 10 })
	const music = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true } })
	const data = await paginate<Prisma.PullGetPayload<{ include: { user: true, } }>, Prisma.PullFindManyArgs>(
		prisma.pull,
		{
			where: {
				title: { contains: ctx.query.q as string },
			},
			include: {
				user: true,
			},
		},
		{ page: ctx.query.page as string })
	if (!data || !music) return { notFound: true }
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.music.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { ...data, music, bookmarked: !!bookmarked?.bookmarks.length },
	};
};

export default Issues;

