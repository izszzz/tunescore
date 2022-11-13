import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import ArtistList from "../../components/elements/list/artist";
import { trpc } from "../../utils/trpc";

const Artists: NextPage = () => {
	const { data: artists } = trpc.useQuery(["artist.index"]);
	return (
		<DefaultSingleColumnLayout>
			<p>artists</p>
			<Link href="/artists/new">
				<a>create artist</a>
			</Link>
			<ArtistList artists={artists || []} />
		</DefaultSingleColumnLayout>
	)
}

export default Artists;