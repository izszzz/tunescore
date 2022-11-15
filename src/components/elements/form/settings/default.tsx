import { useRouter } from 'next/router'
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
interface DefaultSettingsFormProps<T> {
	data: T | undefined | null
	isLoading?: boolean
	resource: "band" | "artist" | "music";
	name: "title" | "name"
}
function DefaultSettingsForm<T extends { id: string }>({ name, data, isLoading, resource }: DefaultSettingsFormProps<T>) {
	const router = useRouter()
	const formContext = useForm<T>()
	const { enqueueSnackbar } = useSnackbar()
	const destroy = trpc.useMutation(`${resource}.destroy`);
	const update = trpc.useMutation(`${resource}.update`, {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("destroy error") }
	});
	const handleSubmit = (data: T) => { if (data) update.mutate(data) }
	const handleDestroy = () => {
		if (data) {
			destroy.mutate(data)
			router.push("/bands")
		}
	}
	useEffect(() => {
		if (data) formContext.reset(data)
	}, [router.locale, formContext, data])
	const disabled = isLoading || update.isLoading
	return (
		<>
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<Grid container spacing={1} my={1}>
					<Grid item xs={10} >
						<TextFieldElement name={name + "." + router.locale} label={name} disabled={disabled} required fullWidth />
					</Grid>
					<Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
						<LoadingButton
							type="submit"
							variant="outlined"
							disabled={disabled || !formContext.formState.isDirty}
							loading={update.isLoading}
							endIcon={<SendIcon />}
							fullWidth
						>
							Update
						</LoadingButton>
					</Grid>
				</Grid>
			</FormContainer>
			<br /><Button type="button" onClick={handleDestroy}>Delete {resource}</Button>
		</>
	)
}

export default DefaultSettingsForm
