import React from "react";
import Card from "@mui/material/Card";
import { Music } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

const MusicCard = ({ title, id }: Music) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/musics/${id}`} ><a>{title}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MusicCard;