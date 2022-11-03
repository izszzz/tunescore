import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { trpc } from "../../../utils/trpc";
import { Band } from "@prisma/client";
import Grid from "@mui/material/Grid";
import BandLayout from "../../../components/layouts/band";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from '@mui/icons-material/Send';
import { useSnackbar } from "notistack";

const EditBand: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const formContext = useForm<Band>()
	const update = trpc.useMutation("band.update", { onSuccess: () => { enqueueSnackbar("update success") } });
	const destroy = trpc.useMutation("band.destroy");
	const handleSubmit = (data: Band) => update.mutate(data)
	return (
		<BandLayout>
			{({ data, isLoading }) => {
				const handleDestroy = () => {
					if (data) {
						destroy.mutate(data)
						router.push("/bands")
					}
				}
				useEffect(() => {
					if (data) formContext.reset(data)
				}, [router.locale, data])
				const disabled = isLoading || update.isLoading
				return (
					<>
						<p>edit</p>
						<FormContainer
							formContext={formContext}
							onSuccess={handleSubmit}
						>
							<Grid container spacing={1} my={1}>
								<Grid item xs={10} >
									<TextFieldElement name={"name." + router.locale} label="Title" disabled={disabled} required fullWidth />
								</Grid>
								<Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
									<LoadingButton
										type="submit"
										variant="outlined"
										disabled={disabled}
										loading={update.isLoading}
										endIcon={<SendIcon />}
										fullWidth
									>
										Update
									</LoadingButton>
								</Grid>
							</Grid>
						</FormContainer>
						<br /><Button type="button" onClick={handleDestroy}>Delete Band</Button>
					</>
				)
			}}

		</BandLayout>
	)
}
export default EditBand;