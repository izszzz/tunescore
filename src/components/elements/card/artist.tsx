import React from "react";
import Card from "@mui/material/Card";
import { Artist } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

const ArtistCard = ({ name, id }: Artist) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/artists/${id}`}><a>{name}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ArtistCard;