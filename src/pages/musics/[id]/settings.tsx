import React, { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { Music, Artist, Locales, Prisma, } from "@prisma/client";
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";
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
import SendIcon from '@mui/icons-material/Send';
import setLocale from "../../../utils/setLocale";
import MusicLayout from "../../../components/layouts/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import { trpc } from "../../../utils/trpc";
import DefaultUpdateAutocomplete, { handleChangeAutocomplete } from "../../../components/elements/autocomplete/update/default";

const EditMusic: NextPage = () => {
	const [artist, setArtist] = useState<Artist>()
	const [artists, setArtists] = useState<Artist[]>([])
	const formContext = useForm<Music>()
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
	const searchArtist = trpc.useMutation("artist.search", { onError: () => { enqueueSnackbar("search artist error") } });
	const handleSubmit = (data: Music) => update.mutate(data)
	const handleSearchArtists = (e: ChangeEvent<HTMLInputElement>) => searchArtist.mutate({ name: e.currentTarget.value, locale: router.locale as string });
	function handleUpdateInclude(params: Prisma.MusicUpdateInput, onSuccess?: () => void) {
		update.mutate({ id: router.query.id as string, ...params }, {
			onSuccess: () => { onSuccess && onSuccess() }
		})
	}
	return (
		<MusicLayout>
			{({ data: music, isLoading }) => {
				useEffect(() => {
					if (music) {
						const { id, title } = music;
						formContext.reset({ id, title })
					}
				}, [router.locale, music])

				useEffect(() => {
					if (music) setArtists(music.artists)
				}, [music])

				const handleDestroy = () => destroy.mutate({ id: router.query.id as string })
				const handleCreateMusicOnArtist = () => {
					if (!artist) return;
					handleUpdateInclude({ artists: { connect: { id: artist.id } } },
						() => setArtists(prev => [...prev, artist])
					)
				}
				const handleDestroyMusicsOnArtists = (artist: Artist) => () => {
					handleUpdateInclude({ artists: { disconnect: { id: artist.id } } },
						() => setArtists(prev => prev.filter(p => p.id !== artist.id))
					)
				}
				const disabled = isLoading || update.isLoading

				return (
					<>
						<FormContainer
							formContext={formContext}
							onSuccess={handleSubmit}
						>
							<Grid container spacing={1} my={1}>
								<Grid item xs={10} >
									<TextFieldElement name={"title." + router.locale} label="Title" disabled={disabled} required fullWidth />
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
						<BandUpdateAutocomplete resource="music" defaultValue={music?.band || { id: "", name: { ja: "", en: "" } }} />
						<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
							label="composers"
							defaultValue={music?.composers || []}
							resource={{ retrieval: "artist", update: "music" }}
							getOptionLabel={(option) => option.name}
							onChange={{
								onSelect: (_e, _v, _r, details) => ({ composers: { connect: { id: details?.option.id } } }),
								onRemove: (_e, _v, _r, details) => ({ composers: { disconnect: { id: details?.option.id } } })
							}}
							multiple
						/>
						<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
							label="lyrists"
							defaultValue={music?.lyrists || []}
							resource={{ retrieval: "artist", update: "music" }}
							getOptionLabel={(option) => option.name}
							onChange={{
								onSelect: (_e, _v, _r, details) => ({ lyrists: { connect: { id: details?.option.id } } }),
								onRemove: (_e, _v, _r, details) => ({ lyrists: { disconnect: { id: details?.option.id } } })
							}}
							multiple
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
											<TableCell>{setLocale(artist.name, router) || ""}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<Box>
							<Autocomplete
								options={searchArtist.data || []}
								loading={searchArtist.isLoading}
								disabled={disabled}
								onChange={handleChangeAutocomplete<Artist, false, false, false>({ onSelect: (_e, _v, _r, details) => setArtist(details.option) })}
								getOptionLabel={option => option.name[router.locale as keyof Locales] || ""}
								renderInput={params => <TextField {...params} label="Artist" margin="dense" onChange={handleSearchArtists} />}
							/>
							<LoadingButton type="button" variant="outlined" disabled={disabled} loading={update.isLoading} onClick={handleCreateMusicOnArtist} fullWidth>Update</LoadingButton>
						</Box>
						<LoadingButton type="button" color="error" variant="outlined" disabled={disabled} loading={update.isLoading} onClick={handleDestroy} fullWidth>Delete</LoadingButton>
					</>
				)
			}
			}
		</MusicLayout >
	)
}

export default EditMusic;

