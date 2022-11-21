import React from "react"
import { useRouter } from 'next/router';
import { Prisma } from "@prisma/client"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import setLocale from "../../../utils/setLocale";
import ArtistChip from "../../../components/elements/chip/artist";
import BandChip from "../../../components/elements/chip/band";
import ResourceIcon from "../icon/resource";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

const MusicCard = ({ data: { id, title, image, composers, band, user } }: { data: Prisma.MusicGetPayload<{ include: { user: true, composers: true, lyrists: true, band: true } }> }) => {
	const router = useRouter()
	return (
		<Box width="200px" onClick={() => router.push({ pathname: "/musics/[id]", query: { id } })} >
			<CardActionArea>
				{image ?
					<CardMedia
						component="img"
						height="200px"
						width="200px"
						image={image}
					/>
					:
					<Box borderRadius="medium" width="200px" height="200px" display="flex" justifyContent="center" alignItems="center" bgcolor="grey.300">
						<ResourceIcon resource="music" sx={{ fontSize: "60px", color: "grey" }} />
					</Box>
				}
			</CardActionArea >
			<Typography gutterBottom variant="h6" component="div" noWrap>
				{setLocale(title, router)}
			</Typography>
			{user ? <BandChip label={user.name} />
				: band ? <BandChip label={setLocale(band.name, router)} />
					: composers[0] ? <ArtistChip label={setLocale(composers[0].name, router)} />
						: <></>
			}
		</Box>
	)
}

export default MusicCard