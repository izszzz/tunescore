import React from "react"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Layout from "./Layout";

export default function BackHeader() {
	const onClick = () => history.back();
	return (
		<Layout>
			<IconButton onClick={onClick}>
				<ArrowBackIosIcon />
			</IconButton>
		</Layout>
	)
}