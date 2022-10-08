import Button from "@mui/material/Button";
import { Band } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import SingleColumnLayout from "../../components/layouts/single_column";
import { trpc } from "../../utils/trpc";

const NewBand: NextPage = () => {
	const router = useRouter()
	const create = trpc.useMutation(["band.create"]);
	const handleSubmit = (data: Band) => {
		create.mutate(data)
		router.push("/bands")
	}
	return (
		<SingleColumnLayout>
			<p>new band</p>
			<FormContainer onSuccess={handleSubmit}>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</SingleColumnLayout>
	)
}

export default NewBand;