import type { GetServerSideProps, NextPage } from "next";
import BandLayout, { BandLayoutProps } from "../../../components/layouts/show/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default"
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import { getProviders } from "next-auth/react";
type BandProps = Pick<BandLayoutProps, "data" | "bookmarked" | "providers">
const EditBand: NextPage<BandProps> = ({ providers, data, bookmarked }) => {
	return (
		<BandLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="settings">
			<DefaultSettingsForm<Prisma.BandGetPayload<null>>
				data={data}
				resource="band"
				name="name" />
		</BandLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.band.findUnique({ where: { id: ctx.query.id as string } })
	const providers = await getProviders()
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.band.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};
export default EditBand;