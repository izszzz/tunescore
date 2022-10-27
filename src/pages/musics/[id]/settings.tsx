import React, { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, AutocompleteElement, useForm } from "react-hook-form-mui"
import MusicLayout from "../../../components/layouts/music";
import LocaleAutocomplete from "../../../components/elements/autocomplete/locale";
import { trpc } from "../../../utils/trpc";
import { Artist, Band, Locales, Music, Prisma } from "@prisma/client";
import { useSnackbar } from "notistack";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import Grid from "@mui/material/Grid";

const customMusic = Prisma.validator<Prisma.MusicArgs>()({ include: { user: true, band: true, composers: true, lyrists: true, artists: true } })
type CustomMusic = Prisma.MusicGetPayload<typeof customMusic>
const EditMusic: NextPage = () => {
	const [artist, setArtist] = useState<Artist>()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const update = trpc.useMutation("music.update", {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	const destroy = trpc.useMutation("music.destroy", {
		onSuccess: () => router.push("/musics"),
		onError: () => { enqueueSnackbar("destroy error") }
	});
	const searchBand = trpc.useMutation("band.search", {
		onError: () => { enqueueSnackbar("search band error") }
	});
	const searchArtist = trpc.useMutation("artist.search", {
		onError: () => { enqueueSnackbar("search artist error") }
	});
	const destroyMusicsOnComposers = trpc.useMutation("musicsOnComposers.destroy", {
		onSuccess: () => { enqueueSnackbar("destroy success") },
		onError: () => { enqueueSnackbar("destroy musics on composers error") }
	});
	const createMusicsOnComposers = trpc.useMutation("musicsOnComposers.create", {
		onError: () => { enqueueSnackbar("create musics on composers error") }
	});
	const destroyMusicsOnLyrists = trpc.useMutation("musicsOnLyrists.destroy", {
		onSuccess: () => { enqueueSnackbar("destroy success") },
		onError: () => { enqueueSnackbar("destroy musics on composers error") }
	});
	const createMusicsOnLyrists = trpc.useMutation("musicsOnLyrists.create", {
		onError: () => { enqueueSnackbar("create musics on composers error") }
	});
	const destroyMusicsOnArtists = trpc.useMutation("musicsOnArtists.destroy", {
		onSuccess: () => { enqueueSnackbar("destroy success") },
		onError: () => { enqueueSnackbar("destroy musics on composers error") }
	});
	const createMusicsOnArtists = trpc.useMutation("musicsOnArtists.create", {
		onError: () => { enqueueSnackbar("create musics on composers error") }
	});
	const handleSubmit = (data: Music & { band: Band }) => update.mutate(data)
	const handleSearchBand = (e: ChangeEvent<HTMLInputElement>) => searchBand.mutate({ title: e.currentTarget.value });
	const handleSearchArtist = (e: ChangeEvent<HTMLInputElement>) => searchArtist.mutate({ title: e.currentTarget.value });
	return (
		<MusicLayout>
			{({ data: music, isLoading }) => {
				const formContext = useForm<CustomMusic>()
				const handleDestroy = () => music && destroy.mutate(music)
				const handleDestroyMusicsOnComposers = (artist: Artist) => music && destroyMusicsOnComposers.mutate({ musicId: music.id, composerId: artist.id })
				const handleCreateMusicsOnComposers = (artist: Artist) => music && createMusicsOnComposers.mutate({ musicId: music.id, composerId: artist.id })
				const handleDestroyMusicsOnLyrists = (artist: Artist) => music && destroyMusicsOnLyrists.mutate({ musicId: music.id, lyristId: artist.id })
				const handleCreateMusicsOnLyrists = (artist: Artist) => music && createMusicsOnLyrists.mutate({ musicId: music.id, lyristId: artist.id })
				const handleDestroyMusicsOnArtists = (artist: Artist) => () => music && artist && destroyMusicsOnArtists.mutate({ musicId: music.id, artistId: artist?.id })
				const handleCreateMusicsOnArtists = () => music && artist && createMusicsOnArtists.mutate({ musicId: music.id, artistId: artist?.id })
				useEffect(() => {
					if (music)
						formContext.reset(music)
				}, [music])

				return (
					<>
						<FormContainer
							formContext={formContext}
							onSuccess={handleSubmit}
						>
							<Grid container spacing={1}>
								<Grid item xs={8}>
									<TextFieldElement name={"title." + router.locale} label="Title" margin="dense" required disabled={isLoading} fullWidth />
								</Grid>
								<Grid item xs={4}>
									<LocaleAutocomplete />
								</Grid>
							</Grid>
							<AutocompleteElement
								name="band"
								label="Band"
								options={searchBand.data || []}
								loading={searchBand.isLoading}
								autocompleteProps={{
									disabled: isLoading,
									onChange: (_e, value) => value.id,
									getOptionLabel: (option: Band) => option.name[router.locale as keyof Locales] || "",
								}}
								textFieldProps={{ margin: "dense", onChange: handleSearchBand }} />
							<AutocompleteElement
								name="composers"
								label="Composer"
								options={searchArtist.data || []}
								loading={searchArtist.isLoading}
								multiple
								autocompleteProps={{
									disabled: isLoading,
									onChange: (_e, _value, reason, details) => {
										if (reason === "selectOption") {
											handleCreateMusicsOnComposers(details?.option)
											return details?.option
										}
										if (reason === "removeOption")
											handleDestroyMusicsOnComposers(details?.option)
									},
									getOptionLabel: (option: Artist) => option.name[router.locale as keyof Locales] || ""
								}}
								textFieldProps={{ margin: "dense", onChange: handleSearchArtist }}
							/>
							<AutocompleteElement
								name="lyrists"
								label="Lyrist"
								options={searchArtist.data || []}
								loading={searchArtist.isLoading}
								multiple
								autocompleteProps={{
									disabled: isLoading,
									onChange: (_e, _value, reason, details) => {
										if (reason === "selectOption") {
											handleCreateMusicsOnLyrists(details?.option)
										}
										if (reason === "removeOption")
											handleDestroyMusicsOnLyrists(details?.option)
									},
									getOptionLabel: (option: Artist) => option.name[router.locale as keyof Locales] || ""
								}}
								textFieldProps={{ margin: "dense", onChange: handleSearchArtist }}
							/>
							<Button type="submit" variant="outlined" color="primary" disabled={isLoading}>Update</Button>
						</FormContainer>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{music?.artists.map((artist) => (
										<TableRow key={artist.id}>
											<TableCell >
												<IconButton onClick={handleDestroyMusicsOnArtists(artist)}>
													<CloseIcon />
												</IconButton>
											</TableCell>
											<TableCell />
											<TableCell>{artist.name[router.locale as keyof Locales] || ""}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<Box>
							<Autocomplete
								options={searchArtist.data || []}
								loading={searchArtist.isLoading}
								disabled={isLoading}
								onChange={(_e, _value, reason, details) => {
									if (reason === "selectOption")
										setArtist(details?.option)
								}}
								getOptionLabel={(option: Artist) => option.name[router.locale as keyof Locales] || ""}
								renderInput={params => <TextField {...params} label="Artist" margin="dense" onChange={handleSearchArtist} />}
							/>
							<Button type="button" variant="outlined" color="primary" disabled={isLoading} onClick={handleCreateMusicsOnArtists} fullWidth>Add</Button>
						</Box>
						<br /><Button type="button" variant="contained" color="error" onClick={handleDestroy}>Delete Account</Button>
					</>
				)
			}}
		</MusicLayout >
	)
}

export default EditMusic;

