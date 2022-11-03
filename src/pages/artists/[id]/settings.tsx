import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useSnackbar } from "notistack";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { Artist, Band, Prisma } from "@prisma/client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from '@mui/icons-material/Send';
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/artist";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";

const EditArtist: NextPage = () => {
	const router = useRouter()
	const formContext = useForm<Artist>()
	const { data: artist } = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	const update = trpc.useMutation("artist.update");
	const destroy = trpc.useMutation("artist.destroy");
	const handleSubmit = (data: Artist) => update.mutate(data)
	const handleDestroy = () => {
		if (artist) destroy.mutate(artist)
		router.push("/artists")
	}
	useEffect(() => {
		if (artist)
			formContext.reset(artist)
	}, [artist])

	return (
		<ArtistLayout>
			{({ data, isLoading }) => {
				useEffect(() => {
					if (data) {
						const { id, name } = data;
						formContext.reset({ id, name })
					}
				}, [router.locale, data])
				const disabled = isLoading || update.isLoading
				return (
					<>
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
						<BandUpdateAutocomplete defaultValue={data?.band || { id: "", name: { ja: "", en: "" } }} resource="artist" />
						<br /><Button type="button" onClick={handleDestroy}>Delete Artist</Button>
					</>
				)
			}}
		</ArtistLayout>
	)
}
export default EditArtist;