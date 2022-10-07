import type { NextPage } from "next";
import Link from 'next/link'
import SingleColumnLayout from "../../components/layouts/single_column";
import MusicCard from "../../components/elements/card/Music";
import { trpc } from "../../utils/trpc";

const Musics: NextPage = () => {
	const { data: musics } = trpc.useQuery(["music.index"]);
	return (
		<SingleColumnLayout>
			<p>musics</p>
			<Link href="/musics/new">
				<a>create music</a>
			</Link>
			<div>
				{musics?.map(music => <MusicCard {...music} />)}
			</div>
		</SingleColumnLayout>
	)
}

export default Musics;