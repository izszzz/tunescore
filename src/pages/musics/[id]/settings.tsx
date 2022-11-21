import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Artist, Prisma, PrismaClient, } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MusicLayout from "../../../components/layouts/show/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default"
import ArtistsUpdateForm from "../../../components/elements/form/update/artists"
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import ResourceIcon from "../../../components/elements/icon/resource";
import LinkForm from "../../../components/elements/form/settings/link"
interface MusicProps {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true } }>
	bookmarked: boolean;
}

const SettingsMusic: NextPage<MusicProps> = ({ data, bookmarked }) => {
	return (
		<MusicLayout data={data} bookmarked={bookmarked} activeTab="settings">
			<Typography variant="h4"> Info</Typography>
			<Divider />
			<DefaultSettingsForm<Prisma.MusicGetPayload<{ include: { artists: true } }>>
				data={data}
				resource="music"
				name="title" />
			<BandUpdateAutocomplete resource="music" defaultValue={data.band} />
			<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
				defaultValue={data.composers}
				resource={{ retrieval: "artist", update: "music" }}
				getOptionLabel={option => option.name}
				ChipProps={{ icon: <ResourceIcon resource="artist" /> }}
				textFieldProps={{
					label: "composers",
					margin: "dense"
				}}
				onChange={{
					onSelect: (_e, _v, _r, details) => ({ composers: { connect: { id: details?.option.id } } }),
					onRemove: (_e, _v, _r, details) => ({ composers: { disconnect: { id: details?.option.id } } })
				}}
				multiple
			/>
			<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
				defaultValue={data.lyrists}
				resource={{ retrieval: "artist", update: "music" }}
				getOptionLabel={(option) => option.name}
				ChipProps={{ icon: <ResourceIcon resource="artist" /> }}
				textFieldProps={{
					label: "lyrists",
					margin: "dense"
				}}
				onChange={{
					onSelect: (_e, _v, _r, details) => ({ lyrists: { connect: { id: details?.option.id } } }),
					onRemove: (_e, _v, _r, details) => ({ lyrists: { disconnect: { id: details?.option.id } } })
				}}
				multiple
			/>
			<ArtistsUpdateForm data={data.artists} />

			<Typography variant="h4">SNS</Typography>
			<Divider />
			<LinkForm defaultValue={data.link} resource="music" />
		</MusicLayout >
	)
}
export const getServerSideProps: GetServerSideProps<MusicProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true } })
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.music.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length },
	};
};

export default SettingsMusic;

