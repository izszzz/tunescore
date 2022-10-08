import Button from "@mui/material/Button";
import { Artist } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import SingleColumnLayout from "../../components/layouts/single_column";
import { trpc } from "../../utils/trpc";

const NewMusic: NextPage = () => {
	const router = useRouter()
	const create = trpc.useMutation(["artist.create"]);
	const handleSubmit = (data: Artist) => {
		create.mutate(data)
		router.push("/artists")
	}
	return (
		<SingleColumnLayout>
			<p>new artist</p>
			<FormContainer onSuccess={handleSubmit}>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</SingleColumnLayout>
	)
}

export default NewMusic;