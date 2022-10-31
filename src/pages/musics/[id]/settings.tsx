import React, { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import MusicLayout from "../../../components/layouts/music";
import LocaleAutocomplete from "../../../components/elements/autocomplete/locale";
import { trpc } from "../../../utils/trpc";
import { Music, Artist, Band, Locales, Prisma } from "@prisma/client";
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

const EditMusic: NextPage = () => {
	const [artist, setArtist] = useState<Artist>()
	const [artists, setArtists] = useState<Artist[]>([])
	const [composers, setComposers] = useState<Artist[]>([])
	const [lyrists, setLyrists] = useState<Artist[]>([])
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const update = trpc.useMutation("music.update", {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	const destroy = trpc.useMutation("music.destroy", {
		onSuccess: () => {
			enqueueSnackbar("update success")
			router.push("/musics")
		},
		onError: () => { enqueueSnackbar("destroy error") }
	});
	const searchBand = trpc.useMutation("band.search", {
		onError: () => { enqueueSnackbar("search band error") }
	});
	const searchArtist = trpc.useMutation("artist.search", {
		onError: () => { enqueueSnackbar("search artist error") }
	});
	const handleSearchBand = (e: ChangeEvent<HTMLInputElement>) => searchBand.mutate({ name: e.currentTarget.value, locale: router.locale || "" });
	const handleSearchArtists = (e: ChangeEvent<HTMLInputElement>) => searchArtist.mutate({ name: e.currentTarget.value, locale: router.locale || "" });
	return (
		<MusicLayout>
			{({ data: music, isLoading }) => {
				const formContext = useForm<Music>()
				useEffect(() => {
					if (music) {
						const { id, title } = music;
						formContext.reset({ id, title })
					}
				}, [router.locale, music])

				useEffect(() => {
					if (music) {
						setComposers(music.composers)
						setLyrists(music.lyrists)
						setArtists(music.artists)
					}
				}, [music])

				if (!music) return <>loading</>
				const handleSubmit = (data: Music) => update.mutate(data)
				const handleDestroy = () => destroy.mutate(music)
				const handleCreateMusicOnArtist = () => {
					if (!artist) return;
					update.mutate({ id: music.id, artists: { connect: { id: artist.id } } }, {
						onSuccess: () => setArtists(prev => [...prev, artist])
					});
				}
				const handleDestroyMusicsOnArtists = (artist: Artist) => () => {
					update.mutate({ id: music.id, artists: { disconnect: { id: artist.id } } }, {
						onSuccess: () => setArtists(prev => prev.filter(p => p.id !== artist.id))
					});
				}

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
							<Button type="submit" variant="outlined" fullWidth>Update</Button>
						</FormContainer>
						<Autocomplete
							value={music.band}
							options={searchBand.data || []}
							loading={searchBand.isLoading}
							disabled={isLoading}
							onChange={(_e, _value, reason, details) => {
								if (reason === "clear") update.mutate({ id: music.id, band: { disconnect: true } })
								if (!details) return console.log("details not found")
								if (reason === "selectOption") update.mutate({ id: music.id, band: { connect: { id: details.option.id } } })
							}}
							getOptionLabel={(option: Band) => option.name[router.locale as keyof Locales] || ""}
							renderInput={(params) =>
								<TextField
									{...params}
									variant="outlined"
									label="Band"
									margin="dense"
									onChange={handleSearchBand}
								/>
							}
						/>
						<Autocomplete
							value={composers}
							multiple
							isOptionEqualToValue={(option, v) => option.id === v.id}
							options={searchArtist.data || []}
							loading={searchArtist.isLoading}
							disabled={isLoading}
							onChange={(_e, _value, reason, details) => {
								if (!details) return console.log("details not found")
								if (reason === "selectOption") {
									update.mutate({ id: music.id, composers: { connect: details.option } }, {
										onSuccess: () =>
											setComposers(prev => [...prev, details.option])
									})
								}
								if (reason === "removeOption") {
									update.mutate({ id: music.id, composers: { disconnect: details.option } }, {
										onSuccess: () =>
											setComposers(prev => prev.filter(p => p.id !== details.option.id))
									})
								}
							}}
							getOptionLabel={(option) => option.name[router.locale as keyof Locales] || ""}
							renderInput={(params) =>
								<TextField
									{...params}
									variant="outlined"
									label="Composers"
									margin="dense"
									onChange={handleSearchArtists}
								/>
							}
						/>
						<Autocomplete
							value={lyrists}
							multiple
							options={searchArtist.data || []}
							loading={searchArtist.isLoading}
							disabled={isLoading}
							onChange={(_e, _value, reason, details) => {
								if (!details) return console.log("details not found")
								if (reason === "selectOption") {
									update.mutate({ id: music.id, lyrists: { connect: details.option } }, {
										onSuccess: () =>
											setLyrists(prev => [...prev, details.option])
									})
								}
								if (reason === "removeOption") {
									update.mutate({ id: music.id, lyrists: { disconnect: details.option } }, {
										onSuccess: () =>
											setLyrists(prev => prev.filter(p => p.id !== details.option.id))
									})
								}
							}}
							getOptionLabel={(option: Artist) => option.name[router.locale as keyof Locales] || ""}
							renderInput={(params) =>
								<TextField
									{...params}
									variant="outlined"
									label="Lyrists"
									placeholder="Favorites"
									margin="dense"
									onChange={handleSearchArtists}
								/>
							}
						/>
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
									{artists.map((artist) => (
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
									if (reason === "selectOption") setArtist(details?.option)
								}}
								getOptionLabel={(option: Artist) => option.name[router.locale as keyof Locales] || ""}
								renderInput={params => <TextField {...params} label="Artist" margin="dense" onChange={handleSearchArtists} />}
							/>
							<Button type="button" variant="outlined" color="primary" disabled={isLoading} onClick={handleCreateMusicOnArtist} fullWidth>Add</Button>
						</Box>
						<br /><Button type="button" variant="contained" color="error" onClick={handleDestroy}>Delete Account</Button>
					</>
				)
			}}
		</MusicLayout >
	)
}

export default EditMusic;

