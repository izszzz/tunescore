import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import { Band, Locales } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

const BandCard = ({ name, id }: Band) => {
	const router = useRouter()
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/bands/${id}`}><a>{name[router.locale as keyof Locales]}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BandCard;