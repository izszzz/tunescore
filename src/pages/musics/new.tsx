import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import { Music } from "@prisma/client";
import { FormContainer, RadioButtonGroup, TextFieldElement } from "react-hook-form-mui"
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";

const NewMusic: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const handleSubmit = (data: Music) => { create.mutate(data) }
	const create = trpc.useMutation(["music.create"], {
		onSuccess: () => router.push("/musics"),
		onError: error => { enqueueSnackbar(String(error)) }
	});
	return (
		<DefaultSingleColumnLayout >
			<Box borderBottom={1} mb={3}>
				<Typography variant="h3">Create a New Music</Typography>
			</Box>
			<FormContainer onSuccess={handleSubmit}>
				<Box borderBottom={1} mb={3}>
					<RadioButtonGroup label="type" name="type" options={[{ id: "0", label: "original" }, { id: "1", label: "copy" }]} required />
				</Box>
				<Box borderBottom={1} mb={3}>
					<RadioButtonGroup label="visibillity" name="visibility" options={[{ id: "0", label: "public" }, { id: "1", label: "private" }]} required />
				</Box>
				<TextFieldElement name={"title." + router.locale} label="Title" required /><br />
				<TextFieldElement
					margin={'dense'}
					label={'price'}
					name={'number-text-field'}
					required
					type={'number'}
				/><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</DefaultSingleColumnLayout >
	)
}

export default NewMusic;