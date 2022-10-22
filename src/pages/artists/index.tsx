import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import ArtistCard from "../../components/elements/card/artist";
import { trpc } from "../../utils/trpc";

const Artists: NextPage = () => {
	const { data: artists } = trpc.useQuery(["artist.index"]);
	return (
		<DefaultSingleColumnLayout>
			<p>artists</p>
			<Link href="/artists/new">
				<a>create artist</a>
			</Link>
			<div>
				{artists?.map(artist => <ArtistCard key={artist.id} {...artist} />)}
			</div>
		</DefaultSingleColumnLayout>
	)
}

export default Artists;