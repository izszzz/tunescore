import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import MusicCard from "../../components/elements/card/music";
import { trpc } from "../../utils/trpc";

const Musics: NextPage = () => {
	const { data: musics } = trpc.useQuery(["music.index"]);
	return (
		<DefaultSingleColumnLayout >
			<Link href="/musics/new">
				<a>create music</a>
			</Link>
			{musics?.map(music => <MusicCard key={music.id} {...music} />)}
		</DefaultSingleColumnLayout>
	)
}

export default Musics;