import React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import { Band } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import setLocale from "../../../utils/setLocale"

const BandCard = ({ name, id }: Band) => {
	const router = useRouter()
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link key={id} href={`/bands/${id}`}><a>{setLocale(name, router)}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BandCard;