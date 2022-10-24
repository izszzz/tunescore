import React from "react";
import Card from "@mui/material/Card";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import locale from '@mui/material/locale';

const customMusic = Prisma.validator<Prisma.MusicArgs>()({ include: { user: true } })
type CustomMusic = Prisma.MusicGetPayload<typeof customMusic>
const MusicCard = ({ id, title, user }: CustomMusic) => {
	console.log(title)
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">

					{/* TODO: fix Type */}
					{/*@ts-ignore*/}
					<Link href={`/musics/${id}`} ><a>{title?.jaJP}</a></Link>
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					created by <Link href={`/users/${user?.id}`}><a>{user?.name}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MusicCard;