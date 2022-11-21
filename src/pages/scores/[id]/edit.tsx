import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ScoreEditor from "../../../components/elements/editor/score";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

interface ScoreEditProps {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true } }>
}
const ScoreEdit: NextPage<ScoreEditProps> = ({ data }) => {
	return (
		<ScoreEditor defaultValue={data.score} />
	)
}

export const getServerSideProps: GetServerSideProps<ScoreEditProps> = async (ctx) => {
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

export default ScoreEdit;