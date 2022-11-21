import React from "react"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/router"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ListItemIcon from "@mui/material/ListItemIcon"
import setLocale from "../../../utils/setLocale"
import ResourceIcon from "../icon/resource"

interface BandListProps {
	bands: (Prisma.BandGetPayload<{
		include: {
			_count: {
				select: {
					artists: true
					musics: true
				}
			}
		}
	}>)[]
}
const BandList = ({ bands }: BandListProps) => {
	const router = useRouter()
	return (
		<List>
			<Divider component="li" />
			{bands.map(band =>
				<React.Fragment key={band.id}>
					<ListItem disablePadding onClick={() => router.push({ pathname: "/bands/[id]", query: { id: band.id } })}>
						<ListItemButton>
							<ListItemIcon>
								<ResourceIcon resource="band" />
							</ListItemIcon>
							<ListItemText primary={
								<Box component="span" display="flex" alignItems="center">
									<Typography
										component="span"
										variant="h6" mr={3}>
										{setLocale(band.name, router)}
									</Typography>
								</Box>
							}
								secondary={
									<Box component="span" display="flex" alignItems="center">
										<Typography
											component="span"
											mr={1}
											variant="body2"
											color="text.subprimary">
											musics count albums count artists count
										</Typography>
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

export default BandList