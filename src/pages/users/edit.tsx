import { useEffect } from "react";
import type { NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import SingleColumnLayout from "../../components/layouts/single_column";
import { trpc } from "../../utils/trpc";

const Edit: NextPage = () => {
	const router = useRouter()
	const { data: session } = useSession()
	const formContext = useForm<User>()
	const update = trpc.useMutation("user.update");
	const destroy = trpc.useMutation("user.destroy");
	const handleSubmit = (data: User) => update.mutate(data)
	const handleDestroy = () => {
		destroy.mutate(session?.user)
		router.push("/")
	}
	useEffect(() => {
		formContext.reset(session?.user)
	}, [session])
	return (
		<SingleColumnLayout>
			<p>edit</p>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
				<br /><Button type="button" onClick={handleDestroy}>Delete Account</Button>
			</FormContainer>
		</SingleColumnLayout>
	)
}
export default Edit;
