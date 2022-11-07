import LoadingButton from "@mui/lab/LoadingButton";
import { Issue } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import MusicLayout from "../../../../components/layouts/music";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
	const router = useRouter()
	const handleSubmit = (data: Issue) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	const create = trpc.useMutation(["issue.create"], {
		onSuccess: () => router.push("/musics"),
		onError: error => console.log(error)
	});
	return (
		<MusicLayout>
			{({ data }) =>
				<FormContainer onSuccess={handleSubmit}>
					<TextFieldElement name="title" margin="dense" fullWidth />
					<TextFieldElement
						name="body"
						margin="dense"
						rows={4}
						multiline
						fullWidth />
					<LoadingButton type="submit" loading={create.isLoading} variant="contained">Submit</LoadingButton>
				</FormContainer>
			}
		</MusicLayout>
	)
}

export default Issues;