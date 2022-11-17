import React from "react"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/router"
import Typography from "@mui/material/Typography"
import setLocale from "../../../utils/setLocale"
import ListItemIcon from "@mui/material/ListItemIcon"
import PersonIcon from '@mui/icons-material/Person';

interface ArtistListProps {
	artists: (Prisma.ArtistGetPayload<{
		include: { band: true }
	}>)[]
}
const ArtistList = ({ artists }: ArtistListProps) => {
	const router = useRouter()
	return (
		<List>
			<Divider component="li" />
			{artists.map(artist =>
				<React.Fragment key={artist.id}>
					<ListItem disablePadding onClick={() => router.push({ pathname: "/artists/[id]", query: { id: artist.id } })}>
						<ListItemButton>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary={
								<Typography variant="h6" mr={3}>
									{setLocale(artist.name, router)}
								</Typography>
							}
								secondary={
									artist.band &&
									<Typography
										mr={1}
										variant="body2"
										color="text.subprimary">
										{`joined by ${setLocale(artist.band.name, router)}`}
									</Typography>
								} />
						</ListItemButton>
					</ListItem>
					<Divider component="li" />
				</React.Fragment>
			)}
		</List >
	)
}

export default ArtistList