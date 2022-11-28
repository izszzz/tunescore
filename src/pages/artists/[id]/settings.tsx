import React from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import { Artist } from "@prisma/client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from '@mui/icons-material/Send';
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/show/artist";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";

const EditArtist: NextPage = () => {
	const router = useRouter()
	const id = router.query.id as string
	const { data } = trpc.useQuery(["artist.show", { where: { id } }]);
	const update = trpc.useMutation("artist.update");
	const destroy = trpc.useMutation("artist.destroy");
	const handleSubmit = (data: Artist) => update.mutate({ where: { id }, data })
	const handleDestroy = () => destroy.mutate({ id }, { onSuccess: () => router.push("/artists") })
	if (!data) return <></>
	return (
		<ArtistLayout data={data} bookmarked={data.bookmarked} activeTab="settings">
			<FormContainer
				defaultValues={data}
				onSuccess={handleSubmit}
			>
				<Grid container spacing={1} my={1}>
					<Grid item xs={10} >
						<TextFieldElement name={"name." + router.locale} label="Name" disabled={update.isLoading || destroy.isLoading} required fullWidth />
					</Grid>
					<Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
						<LoadingButton
							type="submit"
							variant="outlined"
							disabled={update.isLoading || destroy.isLoading}
							loading={update.isLoading}
							endIcon={<SendIcon />}
							fullWidth
						>
							Update
						</LoadingButton>
					</Grid>
				</Grid>
			</FormContainer>
			<BandUpdateAutocomplete defaultValue={data.bands} resource="artist" />
			<br /><Button type="button" onClick={handleDestroy}>Delete Artist</Button>
		</ArtistLayout>
	)
}

export default EditArtist;