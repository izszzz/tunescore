import React from "react"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import { ItunesMusic } from "../../../../utils/itunes";
import Tooltip from "@mui/material/Tooltip";
import ResourceIcon from "../../icon/resource";

const MusicItunesCard = ({ data: { artistName, trackCensoredName, artworkUrl100, collectionCensoredName } }: { data: ItunesMusic }) => {
	return (
		<Box width="100px" onClick={() => console.log("")} >
			<Tooltip title={<>
				<Typography variant="subtitle1">{trackCensoredName}</Typography>
				<Typography variant="caption"><ResourceIcon resource="album" fontSize="inherit" />  {collectionCensoredName}</Typography><br />
				<Typography variant="caption"><ResourceIcon resource="band" fontSize="inherit" />  {artistName}</Typography>
			</>}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100px"
						width="100px"
						image={artworkUrl100}
					/>
					<Typography gutterBottom variant="caption" component="div" noWrap>
						{trackCensoredName}
					</Typography>
				</CardActionArea>
			</Tooltip>
		</Box>
	)
}

export default MusicItunesCard