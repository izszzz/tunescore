import { useEffect } from "react";
import type { NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import Header from "../../components/layouts/header";

const EditUser: NextPage = () => {
	const router = useRouter()
	const { data: session } = useSession()
	const formContext = useForm<User>()
	const update = trpc.useMutation("user.update");
	const destroy = trpc.useMutation("user.destroy", { onSuccess: () => router.push("/"), onError: error => console.log(error) });
	const handleSubmit = (data: User) => update.mutate(data)
	const handleDestroy = () => destroy.mutate(session?.user)

	useEffect(() => {
		formContext.reset(session?.user)
	}, [session])
	return (
		<DefaultSingleColumnLayout>
			<p>edit</p>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
				<br /><Button type="button" onClick={handleDestroy}>Delete Account</Button>
			</FormContainer>
		</DefaultSingleColumnLayout>
	)
}
export default EditUser;
