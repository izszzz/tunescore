import { Prisma, PrismaClient } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import ReactDiffViewer from 'react-diff-viewer';
import MusicLayout from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { getServerAuthSession } from "../../../../../server/common/get-server-auth-session";

interface MusicProps {
	data: Prisma.MusicGetPayload<{
		include: {
			artists: true, band: true, composers: true, lyrists: true, user: true, pulls: {
				include: { music: true, user: true }
			}
		}
	}>
	bookmarked: boolean;
}
const Code: NextPage<MusicProps> = ({ data, bookmarked }) => {
	return (
		<MusicLayout data={data} bookmarked={bookmarked} activeTab="pullrequests">
			<PullLayout data={data.pulls[0] as Prisma.PullGetPayload<{ include: { music: true, user: true } }>} activeTab="code">
				<ReactDiffViewer oldValue={data.pulls[0]?.score.original} newValue={data.pulls[0]?.score.changed} />
			</PullLayout>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps<MusicProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true, pulls: { where: { id: ctx.query.pullId as string }, include: { user: true, music: true } } } })
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
export default Code