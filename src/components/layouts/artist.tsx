import React from "react";
import { useRouter } from "next/router";
import { UseQueryResult } from "react-query";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import { trpc } from "../../utils/trpc";
import DefaultSingleColumnLayout from "./single_column/default";
import setLocale from "../../utils/setLocale";

interface ArtistLayoutProps {
	children: (artist: UseQueryResult<Prisma.ArtistGetPayload<{
		include: {
			composedMusics: { include: { composers: true, lyrists: true } },
			writtenMusics: { include: { composers: true, lyrists: true } },
			musics: { include: { composers: true, lyrists: true } },
			band: true
		}
	}> | null>) => React.ReactNode;
}

const ArtistLayout: React.FC<ArtistLayoutProps> = ({ children }) => {
	const router = useRouter()
	const artistQuery = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	const { data: artist } = artistQuery
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{artist && setLocale(artist.name, router)}
				</Typography>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={router.asPath} onChange={handleChange}>
						<Tab label="Info" value={"/artists/" + router.query.id} />
						<Tab label="Settings" value={"/artists/" + router.query.id + "/settings"} />
					</Tabs>
				</Box>
			</>
		}>
			{children(artistQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default ArtistLayout;