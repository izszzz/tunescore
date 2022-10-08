import React from "react";
import Card from "@mui/material/Card";
import { Band } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

const BandCard = ({ name, id }: Band) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/bands/${id}`}><a>{name}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BandCard;