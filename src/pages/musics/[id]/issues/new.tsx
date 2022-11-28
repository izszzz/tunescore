import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { Issue, } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import MusicLayout from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSnackbar } from "notistack";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);
const Issues: NextPage = () => {
	const formContext = useForm<Issue>()
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	const { data } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	const create = trpc.useMutation(["issue.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/issues", query: { id: router.query.id as string } }),
		onError: () => { enqueueSnackbar("issue.create error") }
	});
	const handleSubmit = (data: Issue) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	if (!data) return <></>
	return (
		<MusicLayout data={data} bookmarked={data.bookmarked} activeTab="issues">
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


export default Issues;