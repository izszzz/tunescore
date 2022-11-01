import React from "react";
import Card from "@mui/material/Card";
import { Artist } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import setLocale from "../../../utils/setLocale"

const ArtistCard = ({ name, id }: Artist) => {
	const router = useRouter()
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/artists/${id}`}><a>{setLocale(name, router)}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ArtistCard;