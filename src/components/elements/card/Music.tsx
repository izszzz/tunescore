import React from "react";
import Card from "@mui/material/Card";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

const customMusic = Prisma.validator<Prisma.MusicArgs>()({ include: { user: true } })
type CustomMusic = Prisma.MusicGetPayload<typeof customMusic>
const MusicCard = ({ id, title, user }: CustomMusic) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link href={`/musics/${id}`} ><a>{title}</a></Link>
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					created by <Link href={`/users/${user?.id}`}><a>{user?.name}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MusicCard;