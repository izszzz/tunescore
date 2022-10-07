import Button from "@mui/material/Button";
import { Music } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import SingleColumnLayout from "../../components/layouts/single_column";
import { trpc } from "../../utils/trpc";

const NewMusic: NextPage = () => {
	const router = useRouter()
	const create = trpc.useMutation(["music.create"]);
	const handleSubmit = (data: Music) => {
		create.mutate(data)
		router.push("/musics")
	}
	return (
		<SingleColumnLayout>
			<p>new music</p>
			<FormContainer onSuccess={handleSubmit}>
				<TextFieldElement name="title" label="Title" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</SingleColumnLayout>
	)
}

export default NewMusic;