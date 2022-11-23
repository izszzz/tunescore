import React from "react"
import Typography from "@mui/material/Typography"
import { ItunesMusic } from "../../../../utils/itunes";
import Tooltip from "@mui/material/Tooltip";
import ResourceIcon from "../../icon/resource";
import MusicCard from ".";
import Box from "@mui/material/Box";

interface MusicItunesCardProps {
	data: ItunesMusic
	onClick?: (value: ItunesMusic) => void
}
const MusicItunesCard = ({ data, onClick }: MusicItunesCardProps) => {
	return (
		<Tooltip title={<>
			<Typography variant="subtitle1">{data.trackCensoredName}</Typography>
			<Typography variant="caption"><ResourceIcon resource="album" fontSize="inherit" />  {data.collectionCensoredName}</Typography><br />
			<Typography variant="caption"><ResourceIcon resource="band" fontSize="inherit" />  {data.artistName}</Typography>
		</>}>
			<Box>
				<MusicCard
					title={
						<Typography variant="caption" noWrap>
							{data.trackCensoredName}
						</Typography>
					}
					image={data.artworkUrl100}
					size="100px"
					onClick={() => onClick && onClick(data)} />
			</Box>
		</Tooltip>
	)
}

export default MusicItunesCard