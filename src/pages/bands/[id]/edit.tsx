import { useEffect } from "react";
import type { NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import DefaultSingleColumnLayout from "../../../components/layouts/single_column/default";
import { trpc } from "../../../utils/trpc";
import { Band } from "@prisma/client";
import Header from "../../../components/layouts/header";

const EditBand: NextPage = () => {
	const router = useRouter()
	const formContext = useForm<Band>()
	const { data: session } = useSession()
	const { data: band } = trpc.useQuery(["band.show", { id: router.query.id as string }]);
	const update = trpc.useMutation("band.update");
	const destroy = trpc.useMutation("band.destroy");
	const handleSubmit = (data: Band) => update.mutate(data)
	const handleDestroy = () => {
		if (band)
			destroy.mutate(band)
		router.push("/bands")
	}
	useEffect(() => {
		if (band)
			formContext.reset(band)
	}, [band])
	return (
		<DefaultSingleColumnLayout>
			<p>edit</p>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
			</FormContainer>
			<br /><Button type="button" onClick={handleDestroy}>Delete Band</Button>
		</DefaultSingleColumnLayout>
	)
}
export default EditBand;