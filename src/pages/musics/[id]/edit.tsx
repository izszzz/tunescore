import { useEffect } from "react";
import type { NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import SingleColumnLayout from "../../../components/layouts/single_column";
import { trpc } from "../../../utils/trpc";
import { Music } from "@prisma/client";

const EditMusic: NextPage = () => {
	const router = useRouter()
	const formContext = useForm<Music>()
	const { data: session } = useSession()
	const { data: music } = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const update = trpc.useMutation("music.update");
	const destroy = trpc.useMutation("music.destroy");
	const handleSubmit = (data: Music) => update.mutate(data)
	const handleDestroy = () => {
		if (music)
			destroy.mutate(music)
		router.push("/musics")
	}
	useEffect(() => {
		if (music)
			formContext.reset(music)
	}, [music])
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
			<br /><Button type="button" onClick={handleDestroy}>Delete Account</Button>
		</SingleColumnLayout>
	)
}
export default EditMusic;