import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { Issue, } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import MusicLayout, { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { getProviders } from "next-auth/react";
import { useSnackbar } from "notistack";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);
type MusicProps = Pick<MusicLayoutProps, "providers">
const Issues: NextPage<MusicProps> = ({ providers }) => {
	const formContext = useForm<Issue>()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const { data } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	const create = trpc.useMutation(["issue.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/issues", query: { id: router.query.id as string } }),
		onError: () => { enqueueSnackbar("issue.create error") }
	});
	const handleSubmit = (data: Issue) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	if (!data) return <></>
	return (
		<MusicLayout providers={providers} data={data} bookmarked={data.bookmarked} activeTab="issues">
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
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Issues;