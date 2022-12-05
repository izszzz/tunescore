import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import { Music } from "@prisma/client";
import { FormContainer, RadioButtonGroup, TextFieldElement, useForm } from "react-hook-form-mui"
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import Script from "next/script";
import { importer } from "@coderline/alphatab";
import AlphaTexExporter from "../../utils/AlphaTexExporter"

const NewMusic: NextPage = () => {
	const router = useRouter()
	const formContext = useForm()
	const { enqueueSnackbar } = useSnackbar()
	const create = trpc.useMutation(["music.create"], {
		onSuccess: () => router.push("/musics"),
		onError: error => { enqueueSnackbar(String(error)) }
	});
	const handleSubmit = (data: Music) => {
		create.mutate({ ...data, price: Number(data.price) })
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const reader = new FileReader();
			reader.onload = ({ target }) => {
				const result = target?.result
				if (result) exportFile(new Uint8Array(result))
			}
			reader.readAsArrayBuffer(files[0])
		}
		e.target.value = ""
	}
	const exportFile = (data: Uint8Array) => {
		let score = null;
		try {
			score = importer.ScoreLoader.loadScoreFromBytes(data)
		} catch (e) {
			alert("楽譜じゃねえだろこれ")
		}
		if (score != null) {
			const exporter = new AlphaTexExporter();
			exporter.Export(score.tracks[0])
			const tex = exporter.ToTex()
			formContext.setValue("score", tex)
		}
	}
	return (
		<DefaultSingleColumnLayout>
			<Script src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js" onError={(e) => console.log(e)} />
			<Box borderBottom={1} mb={3}>
				<Typography variant="h3">Create a New Music</Typography>
			</Box>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}>
				<Button
					variant="contained"
					component="label"
					disableElevation >
					Guitar Pro
					<input
						type="file"
						hidden
						onChange={handleChange} />
				</Button>
				<Box borderBottom={1} mb={3}>
					<RadioButtonGroup label="type" name="type" options={[{ id: "ORIGINAL", label: "original" }, { id: "COPY", label: "copy" }]} required />
				</Box>
				<Box borderBottom={1} mb={3}>
					<RadioButtonGroup label="visibillity" name="visibility" options={[{ id: "PUBLIC", label: "public" }, { id: "PRIVATE", label: "private" }]} required />
				</Box>
				<TextFieldElement name={"title." + router.locale} label="Title" required /><br />
				<TextFieldElement
					margin='dense'
					label='price'
					name='price'
					required
					type='number'
				/><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</DefaultSingleColumnLayout>
	)
}

export default NewMusic;
