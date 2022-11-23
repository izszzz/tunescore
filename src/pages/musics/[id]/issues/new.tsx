import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { Issue, Prisma, PrismaClient } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import MusicLayout, { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
import { getProviders } from "next-auth/react";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);
interface MusicProps extends Pick<MusicLayoutProps, "providers" | "bookmarked"> {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true, } }>
}
const Issues: NextPage<MusicProps> = ({ data, bookmarked, providers }) => {
	const formContext = useForm<Issue>()
	const router = useRouter()
	const handleSubmit = (data: Issue) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	const create = trpc.useMutation(["issue.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/issues", query: { id: router.query.id as string } }),
		onError: error => console.log(error)
	});
	return (
		<MusicLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="issues">
			<FormContainer onSuccess={handleSubmit} formContext={formContext}>
				<TextFieldElement name="title" margin="dense" fullWidth />
				<Controller name="body" render={({ field }) =>
					<MDEditor {...field} />
				} />
				<LoadingButton type="submit" loading={create.isLoading} variant="contained">Submit</LoadingButton>
			</FormContainer>
		</MusicLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true } })
	const providers = await getProviders()
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
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};

export default Issues;