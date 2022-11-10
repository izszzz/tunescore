import React, { useMemo } from "react";
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
import DefaultTabs, { DefaultTabsProps } from "../elements/tabs/default";

interface MusicLayoutProps {
	active: "info" | "issues" | "pullrequests" | "settings";
	children: (music: UseQueryResult<Prisma.MusicGetPayload<{ include: { user: true, band: true, composers: true, lyrists: true, artists: true } }> | null>) => React.ReactNode;
}

const MusicLayout: React.FC<MusicLayoutProps> = ({ active, children }) => {
	const router = useRouter()
	const musicQuery = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const { data: music } = musicQuery
	const tabs: DefaultTabsProps["tabs"] = useMemo(() => ([
		{ label: "info", href: { pathname: "/musics/[id]", query: { id: router.query.id as string } } },
		{ label: "issues", href: { pathname: "/musics/[id]/issues", query: { id: router.query.id as string } } },
		{ label: "pullrequests", href: { pathname: "/musics/[id]/pulls", query: { id: router.query.id as string } } },
		{ label: "settings", href: { pathname: "/musics/[id]/settings", query: { id: router.query.id as string } } },
	]), [router.query.id])

	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{music?.user && <Link href={{ pathname: "/users/[id]", query: { id: music.user.id } }}><a>{music?.user?.name}</a></Link>} / {music && setLocale(music.title, router)}
				</Typography>
				<DefaultTabs value={active} tabs={tabs} />
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