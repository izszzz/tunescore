import { Prisma, PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import ScoreLayout from "../../../components/layouts/score"
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

interface ScoreProps {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true } }>
}
const Score: NextPage<ScoreProps> = ({ data }) => {
	return (
		<ScoreLayout value={data.score} />
	)
}
export const getServerSideProps: GetServerSideProps<ScoreProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true } })
	if (!data) return { notFound: true };
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

export default Score;