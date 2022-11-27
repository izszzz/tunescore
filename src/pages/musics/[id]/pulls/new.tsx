import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import LoadingButton from "@mui/lab/LoadingButton";
import { Pull } from "@prisma/client";
import { Controller, FormContainer, TextFieldElement } from "react-hook-form-mui";
import MusicLayout, { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import { getProviders } from "next-auth/react";
import { useSnackbar } from "notistack";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor"),
	{ ssr: false }
);
type NewPullProps = Pick<MusicLayoutProps, "providers">
const NewPull: NextPage<NewPullProps> = ({ providers, }) => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data } = trpc.useQuery(["music.show", { id: router.query.id as string }], { onError: () => { enqueueSnackbar("music.show error") } })
	const create = trpc.useMutation(["pull.create"], {
		onSuccess: () => router.push({ pathname: "/musics/[id]/pulls", query: { id: router.query.id as string } }),
		onError: error => console.log(error)
	});
	const handleSubmit = (data: Pull) => create.mutate({ ...data, music: { connect: { id: router.query.id as string } } })
	if (!data) return <></>
	return (
		<MusicLayout providers={providers} data={data} bookmarked={data.bookmarked} activeTab="pullrequests">
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
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default NewPull;