import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { UseQueryResult } from "react-query";
import DefaultSingleColumnLayout from "./single_column/default";

const customMusic = Prisma.validator<Prisma.MusicArgs>()({ include: { user: true, band: true, composers: { include: { composer: true } }, lyrists: { include: { lyrist: true } }, artists: { include: { artist: true } } } })
type CustomMusic = Prisma.MusicGetPayload<typeof customMusic>

interface MusicLayoutProps {
	children: (music: UseQueryResult<CustomMusic | null>) => React.ReactNode;
}

const MusicLayout: React.FC<MusicLayoutProps> = ({ children }) => {
	const router = useRouter()
	const musicQuery = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					<Link href={`/users/${musicQuery.data?.user?.id}`}><a>{musicQuery.data?.user?.name}</a></Link> / {musicQuery.data?.title}
				</Typography>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={router.asPath} onChange={handleChange}>
						<Tab label="Code" value={"/musics/" + router.query.id} />
						<Tab label="Issues" value={"/musics/" + router.query.id + "/issues"} />
						<Tab label="Settings" value={"/musics/" + router.query.id + "/settings"} />
					</Tabs>
				</Box>
			</>
		}>
			{children(musicQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default MusicLayout;