import React, { useEffect, useState } from "react"
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { Link } from "@prisma/client";
import InputAdornment from "@mui/material/InputAdornment";
import TablePagination from '@mui/material/TablePagination';
import { ItunesMusic, ItunesResponse, searchItunesMusics } from "../../../../utils/itunes";
import { trpc } from "../../../../utils/trpc";
import { PrismaModelNameLowercase } from "../../../../types/common";
import Grid from "@mui/material/Grid";
import MusicItunesCard from "../../card/itunes/music";

interface LinkFormProps {
	resource: PrismaModelNameLowercase
	defaultValue: Link | null
}
const LinkForm = ({ resource, defaultValue }: LinkFormProps) => {
	const [itunesData, setItunesData] = useState<ItunesResponse<ItunesMusic>>()
	const router = useRouter()
	const update = trpc.useMutation(`${resource}.update`)
	const formContext = useForm<Link>()
	useEffect(() => {
		if (defaultValue) formContext.reset(defaultValue)
	}, [defaultValue, formContext])
	useEffect(() => {
		searchItunesMusics("beautiful circus", 0).then(res => {
			setItunesData(res)
			console.log(res)
		})

	}, [])
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
			<Grid container spacing={2}>
				{itunesData?.results.map(data =>
					<Grid item xs={2} key={data.trackId}>
						<MusicItunesCard data={data} />
					</Grid>
				)}
			</Grid>
			<Button type="submit" variant="contained" fullWidth disableElevation>Updata</Button>
		</FormContainer>
	)
}

export default LinkForm