import Button from "@mui/material/Button";
import { Artist } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import DefaultSingleColumnLayout, { DefaultSingleColumnLayoutProps } from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

type NewMusicProps = Pick<DefaultSingleColumnLayoutProps, "providers">
const NewMusic: NextPage<NewMusicProps> = ({ providers }) => {
	const router = useRouter()
	const create = trpc.useMutation(["artist.create"]);
	const handleSubmit = (data: Artist) => {
		create.mutate(data)
		router.push("/artists")
	}
	return (
		<DefaultSingleColumnLayout providers={providers}>
			<p>new artist</p>
			<FormContainer onSuccess={handleSubmit}>
				<TextFieldElement name={"name." + router.locale} label="Name" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
		</DefaultSingleColumnLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default NewMusic;