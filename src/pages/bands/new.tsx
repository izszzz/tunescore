import Button from "@mui/material/Button";
import { Band } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import DefaultSingleColumnLayout, { DefaultSingleColumnLayoutProps } from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

type NewBandProps = Pick<DefaultSingleColumnLayoutProps, "providers">
const NewBand: NextPage<NewBandProps> = ({ providers }) => {
	const router = useRouter()
	const create = trpc.useMutation(["band.create"]);
	const handleSubmit = (data: Band) => {
		create.mutate(data)
		router.push("/bands")
	}
	return (
		<DefaultSingleColumnLayout providers={providers}>
			<p>new band</p>
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


export default NewBand;