import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import BandCard from "../../components/elements/card/band";
import { trpc } from "../../utils/trpc";
import Header from "../../components/layouts/header";

const Bands: NextPage = () => {
	const { data: bands } = trpc.useQuery(["band.index"]);
	return (
		<DefaultSingleColumnLayout>
			<p>bands</p>
			<Link href="/bands/new">
				<a>create band</a>
			</Link>
			<div>
				{bands?.map(band => <BandCard key={band.id} {...band} />)}
			</div>
		</DefaultSingleColumnLayout>
	)
}

export default Bands;