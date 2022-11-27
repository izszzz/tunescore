import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import { StreamingLink } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ItunesMusic, ItunesResponse, searchItunesMusics, lookupItunesMusic } from "../../../../../../utils/itunes";
import { trpc } from "../../../../../../utils/trpc";
import MusicItunesCard from "../../../../card/music/itunes";

interface MusicItunesSelectFormProps {
	streamingLink: StreamingLink | null | undefined
	term: string
}
const MusicItunesSelectForm = ({ streamingLink, term }: MusicItunesSelectFormProps) => {
	const router = useRouter()
	const [options, setOptions] = useState<ItunesResponse<ItunesMusic>>()
	const [value, setValue] = useState<ItunesMusic>()
	const [page, setPage] = useState(0)
	const update = trpc.useMutation("music.update")
	const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
		searchItunesMusics({ term, offset: 12 * page, limit: 12 }).then(res => {
			setOptions(res)
			setPage(page);
		})
	}
	const handleClose = () =>
		update.mutate({ id: router.query.id as string, link: { ...streamingLink, streaming: { itunes: null } } },
			{
				onSuccess: () => {
					setValue(undefined)
					searchItunesMusics({ term, offset: 0, limit: 12 }).then(res => setOptions(res))
				}
			})
	const handleClick = (data: ItunesMusic) =>
		update.mutate({ id: router.query.id as string, link: { streaming: { ...streamingLink, itunes: data.trackViewUrl } } },
			{
				onSuccess: () => setValue(data)
			})
	useEffect(() => {
		if (streamingLink?.itunes) {
			const id = new URL(streamingLink.itunes).searchParams.get("i");
			if (id) lookupItunesMusic({ id }).then(res => setValue(res.results[0]))
		}
		else searchItunesMusics({ term, offset: 0, limit: 12 }).then(res => setOptions(res))
	}, [streamingLink, term])

	return (
		<Box my={2}>
			{value ?
				<Card sx={{ display: "flex" }}>
					<CardContent >
						<CardMedia
							component="img"
							sx={{ width: 100, height: "auto", borderRadius: "3px" }}
							image={value.artworkUrl100}
							alt="Live from space album cover"
						/>
					</CardContent>
					<CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
						<Box>
							<Typography variant="h6">
								{value.trackCensoredName}
							</Typography>
							<Typography variant="caption">
								{value.collectionCensoredName}
							</Typography><br />
							<Typography variant="caption">
								{value.artistName}
							</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<IconButton onClick={handleClose}>
								<Close />
							</IconButton>
						</Box>
					</CardContent>
				</Card>
				: <>
					<Grid container spacing={2}>
						{options?.results.map(data =>
							<Grid item xs={6} sm={4} md={2} key={data.trackId} display="flex" justifyContent="center">
								<MusicItunesCard data={data} onClick={handleClick} />
							</Grid>
						)}
					</Grid>
					<TablePagination component="div" count={100} rowsPerPage={12} page={page} onPageChange={handleChangePage} />
				</>
			}
		</Box>
	)
}

export default MusicItunesSelectForm