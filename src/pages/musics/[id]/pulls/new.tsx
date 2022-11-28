import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import LoadingButton from "@mui/lab/LoadingButton";
import { Pull } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement } from "react-hook-form-mui";
import MusicLayout from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);
const NewPull: NextPage = () => {
	const router = useRouter()
	const id = router.query.id as string
	const { enqueueSnackbar } = useSnackbar()
	const { data } = trpc.useQuery(["music.show", { where: { id } }], { onError: () => { enqueueSnackbar("music.show error") } })
	const create = trpc.useMutation(["pull.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/pulls", query: { id } }),
		onError: error => console.log(error)
	});
	const handleSubmit = (data: Pull) => create.mutate({ ...data, music: { connect: { id } } })
	if (!data) return <></>
	return (
		<MusicLayout data={data} bookmarked={data.bookmarked} activeTab="pullrequests">
			<FormContainer onSuccess={handleSubmit}>
				<TextFieldElement name="title" margin="dense" fullWidth />
				<Controller name="body" render={({ field }) =>
					<MDEditor {...field} />
				} />
				<LoadingButton type="submit" loading={create.isLoading} variant="contained">Submit</LoadingButton>
			</FormContainer>
		</MusicLayout>
	)
}

export default NewPull;