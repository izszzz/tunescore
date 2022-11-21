import LoadingButton from "@mui/lab/LoadingButton"
import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TextField from "@mui/material/TextField"
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Artist, Locales, Prisma } from "@prisma/client"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import React, { ChangeEvent, useEffect, useState } from "react"
import { trpc } from "../../../../utils/trpc"
import setLocale from "../../../../utils/setLocale";
import { handleChangeAutocomplete } from "../../autocomplete/update/default";
import Grid from "@mui/material/Grid"

interface ArtistsUpdateFormProps {
	data: Artist[]
}
const ArtistsUpdateForm = ({ data }: ArtistsUpdateFormProps) => {
	const [artist, setArtist] = useState<Artist>()
	const [artists, setArtists] = useState<Artist[]>([])
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const update = trpc.useMutation("music.update", {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	const searchArtist = trpc.useMutation("artist.index", { onError: () => { enqueueSnackbar("search artist error") } });
	function handleUpdateInclude(params: Prisma.MusicUpdateInput, onSuccess?: () => void) {
		update.mutate({ id: router.query.id as string, ...params }, {
			onSuccess: () => { onSuccess && onSuccess() }
		})
	}
	const handleCreateMusicOnArtist = () => {
		if (!artist) return;
		handleUpdateInclude({ artists: { connect: { id: artist.id } } },
			() => {
				setArtists(prev => [...prev, artist])
				setArtist(undefined)
			}
		)
	}
	const handleDestroyMusicsOnArtists = (artist: Artist) => () => {
		handleUpdateInclude({ artists: { disconnect: { id: artist.id } } },
			() => setArtists(prev => prev.filter(p => p.id !== artist.id))
		)
	}
	const handleSearchArtists = (e: ChangeEvent<HTMLInputElement>) => searchArtist.mutate({ where: { name: { is: { [router.locale]: e.currentTarget.value } } } });
	useEffect(() => { setArtists(data) }, [data])
	return (
		<>
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
								<TableCell>{setLocale(artist.name, router)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box>
				<Grid container spacing={1} my={1}>
					<Grid item xs={10} >
						<Autocomplete
							options={searchArtist.data || []}
							loading={searchArtist.isLoading}
							onChange={handleChangeAutocomplete<Artist, false, false, false>({ onSelect: (_e, _v, _r, details) => setArtist(details.option) })}
							getOptionLabel={option => option.name[router.locale as keyof Locales] || ""}
							renderInput={params => <TextField {...params} label="Artist" onChange={handleSearchArtists} />}
						/>

					</Grid>
					<Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
						<LoadingButton
							type="button"
							variant="outlined"
							disabled={!artist}
							loading={update.isLoading}
							endIcon={<SendIcon />}
							onClick={handleCreateMusicOnArtist}
							fullWidth>Update</LoadingButton>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default ArtistsUpdateForm