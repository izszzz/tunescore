import { Prisma, PrismaClient } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import React from "react";
import MusicLayout, { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import { getServerAuthSession } from "../../../../../server/common/get-server-auth-session";

interface MusicProps extends Pick<MusicLayoutProps, "providers" | "bookmarked"> {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true, } }>
}
const Issue: NextPage<MusicProps> = ({ data, bookmarked, providers }) => {
	return (
		<MusicLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="issues">
			<p>issue</p>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const providers = await getProviders()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true, issues: { where: { id: ctx.query.issueId as string } } } })
	if (!data) return { notFound: true }
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.music.findFirst({
		where: { id: ctx.query.id as string, },
		include: { bookmarks: { where: { id: session?.user?.id } }, },
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};
export default Issue