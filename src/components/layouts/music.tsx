import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useRouter } from "next/router";
import { Locales, Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { UseQueryResult } from "react-query";
import DefaultSingleColumnLayout from "./single_column/default";
import setLocale from "../../utils/setLocale";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface MusicLayoutProps {
	children: (music: UseQueryResult<Prisma.MusicGetPayload<{ include: { user: true, band: true, composers: true, lyrists: true, artists: true } }> | null>) => React.ReactNode;
}

const MusicLayout: React.FC<MusicLayoutProps> = ({ children }) => {
	const router = useRouter()
	const musicQuery = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const { data: music } = musicQuery
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					<Link href={`/users/${music?.user?.id}`}><a>{music?.user?.name}</a></Link> / {music && setLocale(music.title, router)}
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
			{music?.title[router.locale as keyof Locales] === null && <Stack sx={{ width: '100%' }} spacing={2}>
				<Alert severity="warning">
					<AlertTitle>
						指定された言語の曲タイトルが登録されてねえ
					</AlertTitle>
					登録しろ
				</Alert>
			</Stack>}
			{children(musicQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default MusicLayout;