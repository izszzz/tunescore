import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { Issue } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import MusicLayout from "../../../../components/layouts/music";
import { trpc } from "../../../../utils/trpc";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);

const Issues: NextPage = () => {
	const formContext = useForm<Issue>()
	const router = useRouter()
	const handleSubmit = (data: Issue) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	const create = trpc.useMutation(["issue.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/issues", query: { id: router.query.id as string } }),
		onError: error => console.log(error)
	});
	return (
		<MusicLayout active="issues">
			{({ data }) =>
				<FormContainer onSuccess={handleSubmit} formContext={formContext}>
					<TextFieldElement name="title" margin="dense" fullWidth />
					<Controller name="body" render={({ field }) =>
						<MDEditor {...field} />
					} />
					<LoadingButton type="submit" loading={create.isLoading} variant="contained">Submit</LoadingButton>
				</FormContainer>
			}
		</MusicLayout>
	)
}

export default Issues;