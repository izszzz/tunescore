import React from "react"
import Chip, { ChipProps } from "@mui/material/Chip"
import ResourceIcon from "../icon/resource"

const ArtistChip = (props: ChipProps) => {
	return (
		<Chip {...props} icon={<ResourceIcon resource="artist" />} />
	)
}

export default ArtistChip