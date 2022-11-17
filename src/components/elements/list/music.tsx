import React from "react"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/router"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import setLocale from "../../../utils/setLocale"
import Chip from "@mui/material/Chip"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ListItemIcon from "@mui/material/ListItemIcon"

interface MusicListProps {
	musics: (Prisma.MusicGetPayload<{
		include: {
			user: true
		}
	}>)[]
}
const MusicList = ({ musics }: MusicListProps) => {
	const router = useRouter()
	return (
		<List>
			<Divider component="li" />
			{musics.map(music =>
				<React.Fragment key={music.id}>
					<ListItem disablePadding onClick={() => router.push({ pathname: "/musics/[id]", query: { id: music.id } })}>
						<ListItemButton>
							<ListItemIcon>
								<MusicNoteIcon />
							</ListItemIcon>
							<ListItemText primary={
								<Box component="span" display="flex" alignItems="center">
									<Typography variant="h6" mr={3}>
										{setLocale(music.title, router)}
									</Typography>
									<Chip component="span" label={music.type} size="small" />
								</Box>
							}
								secondary={
									<Box component="span" display="flex" alignItems="center">
										<Typography
											mr={1}
											variant="body2"
											color="text.subprimary"
											component="span"
										>
											{`created by ${music.user?.name}`}
										</Typography>
										<Avatar
											component="span"
											src={music.user?.image || ""}
											sx={{ width: 24, height: 24 }} />
									</Box>
								} />
						</ListItemButton>
					</ListItem>
					<Divider component="li" />
				</React.Fragment>
			)}
		</List >
	)
}

export default MusicList