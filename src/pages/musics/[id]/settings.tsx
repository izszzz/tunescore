import React from "react";
import type { NextPage } from "next";
import { Artist, Prisma, } from "@prisma/client";
import MusicLayout from "../../../components/layouts/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default"
import ArtistsUpdateForm from "../../../components/elements/form/update/artists"
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";

const EditMusic: NextPage = () => {
	return (
		<MusicLayout active="settings">
			{({ data, isLoading }) =>
				<>
					<DefaultSettingsForm<Prisma.MusicGetPayload<{ include: { artists: true } }>>
						data={data}
						isLoading={isLoading}
						resource="music"
						name="title" />
					<BandUpdateAutocomplete resource="music" defaultValue={data?.band || { id: "", name: { ja: "", en: "" } }} />
					<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
						label="composers"
						defaultValue={data?.composers || []}
						resource={{ retrieval: "artist", update: "music" }}
						getOptionLabel={(option) => option.name}
						onChange={{
							onSelect: (_e, _v, _r, details) => ({ composers: { connect: { id: details?.option.id } } }),
							onRemove: (_e, _v, _r, details) => ({ composers: { disconnect: { id: details?.option.id } } })
						}}
						multiple
					/>
					<DefaultUpdateAutocomplete<Artist, true, false, false, Prisma.MusicUpdateInput>
						label="lyrists"
						defaultValue={data?.lyrists || []}
						resource={{ retrieval: "artist", update: "music" }}
						getOptionLabel={(option) => option.name}
						onChange={{
							onSelect: (_e, _v, _r, details) => ({ lyrists: { connect: { id: details?.option.id } } }),
							onRemove: (_e, _v, _r, details) => ({ lyrists: { disconnect: { id: details?.option.id } } })
						}}
						multiple
					/>
					<ArtistsUpdateForm data={data?.artists} loading={isLoading} />
				</>
			}
		</MusicLayout >
	)
}

export default EditMusic;

