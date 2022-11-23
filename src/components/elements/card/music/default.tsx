import React from "react"
import { useRouter } from 'next/router';
import { Prisma } from "@prisma/client"
import setLocale from "../../../../utils/setLocale";
import ArtistChip from "../../chip/artist";
import BandChip from "../../chip/band";
import MusicCard from "."
import Typography from "@mui/material/Typography";

const DefaultMusicCard = ({ data: { id, title, image, composers, band, user } }: { data: Prisma.MusicGetPayload<{ include: { user: true, composers: true, lyrists: true, band: true } }> }) => {
	const router = useRouter()
	return (
		<MusicCard
			size="200px"
			title={
				<>
					<Typography variant="h6">
						{setLocale(title, router)}
					</Typography>
					{
						user ? <BandChip label={user.name} />
							: band ? <BandChip label={setLocale(band.name, router)} />
								: composers[0] ? <ArtistChip label={setLocale(composers[0].name, router)} />
									: <></>
					}
				</>
			}
			image={image}
			onClick={() => router.push({ pathname: "/musics/[id]", query: { id } })}
		/>
	)
}

export default DefaultMusicCard