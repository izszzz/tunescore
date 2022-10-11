import React from "react";
import Card from "@mui/material/Card";
import { Music, User } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";

interface MusicCardProps extends Music {
	user: User;
}
const MusicCard = ({ id, title, user }: MusicCardProps) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Typography variant="h5" component="div">
					<Link href={`/musics/${id}`} ><a>{title}</a></Link>
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					created by <Link href={`/users/${user.id}`}><a>{user.name}</a></Link>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MusicCard;