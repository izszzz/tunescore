import Button from "@mui/material/Button";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/show/music";
import PullList from "../../../../components/elements/list/pull";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
interface MusicProps {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true, pulls: { include: { user: true } } } }>
	bookmarked: boolean;
}
const Issues: NextPage<MusicProps> = ({ data, bookmarked }) => {
	const router = useRouter()
	return (
		<MusicLayout data={data} bookmarked={bookmarked} activeTab="pullrequests">
			<Button variant="outlined" onClick={() => router.push(
				{ pathname: "/musics/[id]/pulls/new", query: { id: router.query.id as string } }
			)}>New PullRequest</Button>
			<PullList pulls={data.pulls} />
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps<MusicProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true, pulls: { include: { user: true } } } })
	if (!data) return { notFound: true }
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
		props: { data, bookmarked: !!bookmarked?.bookmarks.length },
	};
};

export default Issues;