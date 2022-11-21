import { Band, Prisma } from "@prisma/client"
import React from "react"
import DefaultUpdateAutocomplete from "./default"

interface BandUpdateAutocomplete {
	defaultValue: Band | null;
	resource: "music" | "artist"
}
function BandUpdateAutocomplete<UpdateInput extends Prisma.MusicUpdateInput | Prisma.ArtistUpdateInput | Prisma.BandUpdateInput>({ defaultValue, resource }: BandUpdateAutocomplete) {
	return (
		<DefaultUpdateAutocomplete<Band, false, false, false, UpdateInput>
			defaultValue={defaultValue}
			resource={{ retrieval: "band", update: resource }}
			getOptionLabel={(option) => option.name}
			textFieldProps={{
				label: "band",
				margin: "dense"
			}}
			onChange={{
				onClear: () => ({ band: { disconnect: true } }) as UpdateInput,
				onSelect: (_e, _v, _r, details) => ({ band: { connect: { id: details?.option.id } } }) as UpdateInput
			}}
		/>
	)
}
export default BandUpdateAutocomplete