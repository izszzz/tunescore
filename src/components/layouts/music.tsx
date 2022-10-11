import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import React from "react";
import Header from "../elements/header";
import { useRouter } from "next/router";
import { Band, Music, User } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { useSnackbar } from 'notistack';

interface MusicLayoutProps {
	children: (music: (Music & { user: User | null } & { band: Band | null }) | null | undefined) => React.ReactNode;
}
const MusicLayout: React.FC<MusicLayoutProps> = ({ children }) => {
	const router = useRouter()
	const { data: music } = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<>
			<Header />
			<Typography variant="h5">
				<Link href={`/users/${music?.user?.id}`}><a>{music?.user?.name}</a></Link> / {music?.title}
			</Typography>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={router.asPath} onChange={handleChange}>
					<Tab label="Code" value={"/musics/" + router.query.id} />
					<Tab label="Issues" value={"/musics/" + router.query.id + "/issues"} />
					<Tab label="Settings" value={"/musics/" + router.query.id + "/settings"} />
				</Tabs>
			</Box>
			<Container>
				{children(music)}
			</Container>
		</>
	)
}

export default MusicLayout;