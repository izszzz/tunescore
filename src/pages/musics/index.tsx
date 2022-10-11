import type { NextPage } from "next";
import Link from 'next/link'
import SingleColumnLayout from "../../components/layouts/single_column";
import MusicCard from "../../components/elements/card/Music";
import { trpc } from "../../utils/trpc";

const Musics: NextPage = () => {
	const { data: musics } = trpc.useQuery(["music.index"]);
	return (
		<SingleColumnLayout>
			<Link href="/musics/new">
				<a>create music</a>
			</Link>
			{musics?.map(music => <MusicCard key={music.id} {...music} />)}
		</SingleColumnLayout>
	)
}

export default Musics;