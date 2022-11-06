import React from "react";
import { useRouter } from "next/router";
import { UseQueryResult } from "react-query";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import { trpc } from "../../utils/trpc";
import DefaultSingleColumnLayout from "./single_column/default";
import DefaultTabs from "../elements/tabs/default";
import setLocale from "../../utils/setLocale";

interface ArtistLayoutProps {
	children: (artist: UseQueryResult<Prisma.ArtistGetPayload<{
		include: {
			composedMusics: { include: { band: true, composers: true, lyrists: true } },
			writtenMusics: { include: { band: true, composers: true, lyrists: true } },
			musics: { include: { band: true, composers: true, lyrists: true } },
			band: true
		}
	}> | null>) => React.ReactNode;
}

const ArtistLayout: React.FC<ArtistLayoutProps> = ({ children }) => {
	const router = useRouter()
	const artistQuery = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	const { data: artist } = artistQuery
	if (!router.query.id) return <></>
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{artist && setLocale(artist.name, router)}
				</Typography>
				<DefaultTabs tabs={[
					{ label: "Info", href: "/artists/" + router.query.id },
					{ label: "Settings", href: "/artists/" + router.query.id + "/settings" }
				]} />
			</>
		}>
			{children(artistQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default ArtistLayout;