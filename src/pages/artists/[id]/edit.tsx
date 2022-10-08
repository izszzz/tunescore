import { useEffect } from "react";
import type { NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import SingleColumnLayout from "../../../components/layouts/single_column";
import { trpc } from "../../../utils/trpc";
import { Artist } from "@prisma/client";

const EditArtist: NextPage = () => {
	const router = useRouter()
	const formContext = useForm<Artist>()
	const { data: session } = useSession()
	const { data: artist } = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	const update = trpc.useMutation("artist.update");
	const destroy = trpc.useMutation("artist.destroy");
	const handleSubmit = (data: Artist) => update.mutate(data)
	const handleDestroy = () => {
		if (artist)
			destroy.mutate(artist)
		router.push("/artists")
	}
	useEffect(() => {
		if (artist)
			formContext.reset(artist)
	}, [artist])
	return (
		<SingleColumnLayout>
			<p>edit</p>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<TextFieldElement name="title" label="Title" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
			<br /><Button type="button" onClick={handleDestroy}>Delete Artist</Button>
		</SingleColumnLayout>
	)
}
export default EditArtist;