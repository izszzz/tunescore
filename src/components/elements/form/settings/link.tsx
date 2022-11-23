import React, { useEffect } from "react"
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { useRouter } from "next/router";
import { Link } from "@prisma/client";
import InputAdornment from "@mui/material/InputAdornment";
import { trpc } from "../../../../utils/trpc";
import { PrismaModelNameLowercase } from "../../../../types/common";

interface LinkFormProps {
	resource: PrismaModelNameLowercase
	defaultValue: Link | null
}
const LinkForm = ({ resource, defaultValue }: LinkFormProps) => {
	const router = useRouter()
	const update = trpc.useMutation(`${resource}.update`)
	const formContext = useForm<Link>()
	useEffect(() => {
		if (defaultValue) formContext.reset(defaultValue)
	}, [defaultValue, formContext])
	const handleSubmit = (data: Link) => update.mutate({ id: router.query.id as string, link: data })
	return (
		<FormContainer formContext={formContext} onSuccess={handleSubmit}>
			{resource !== "music" &&
				<TextFieldElement
					InputProps={{
						startAdornment: <InputAdornment position="start">twitter.com/</InputAdornment>,
					}}
					name="account.twitter"
					margin="dense"
					fullWidth />}
		</FormContainer>
	)
}

export default LinkForm