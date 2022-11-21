import { useRouter } from 'next/router'
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert"
import { PrismaModelNameLowercase } from '../../../../types/common';
import { trpc } from "../../../../utils/trpc";
interface DefaultSettingsFormProps<T> {
	data: T
	isLoading?: boolean
	resource: PrismaModelNameLowercase
	name: "title" | "name"
}
function DefaultSettingsForm<T extends { id: string }>({ name, data, isLoading, resource }: DefaultSettingsFormProps<T>) {
	const router = useRouter()
	const formContext = useForm<T>()
	const { enqueueSnackbar } = useSnackbar()
	const destroy = trpc.useMutation(`${resource}.destroy`, {
		onSuccess: () => {
			enqueueSnackbar("destroy success")
			router.push("/bands")
		}
	});
	const update = trpc.useMutation(`${resource}.update`, {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	const handleSubmit = (data: T) => update.mutate(data)
	const handleDestroy = () => destroy.mutate(data)
	useEffect(() => {
		formContext.reset(data)
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
			<Alert
				variant="outlined"
				severity="warning"
				action={<Button type="button" variant="contained" color="warning" onClick={handleDestroy} disableElevation>Delete {resource}</Button>}
			>
				This is a warning alert
			</Alert>
		</>
	)
}

export default DefaultSettingsForm
