import React from "react";
import Card from "@mui/material/Card";
import { Artist, Locales } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";

const ArtistCard = ({ name, id }: Artist) => {
	const router = useRouter()
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/artists/${id}`}><a>{name[router.locale as keyof Locales]}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ArtistCard;