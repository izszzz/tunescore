import React from "react"
import Button from "@mui/material/Button"
import ItunesIcon from "../icon/itunes"
import Link from "@mui/material/Link"
const ItunesButton = ({ href }: { href: string }) =>
	<Button component={Link} startIcon={<ItunesIcon />} color="error" target="blank" href={href}>Itunes</Button>

export default ItunesButton