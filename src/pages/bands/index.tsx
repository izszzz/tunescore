import type { NextPage } from "next";
import Link from 'next/link'
import SingleColumnLayout from "../../components/layouts/single_column";
import BandCard from "../../components/elements/card/band";
import { trpc } from "../../utils/trpc";

const Bands: NextPage = () => {
	const { data: bands } = trpc.useQuery(["band.index"]);
	return (
		<SingleColumnLayout>
			<p>bands</p>
			<Link href="/bands/new">
				<a>create band</a>
			</Link>
			<div>
				{bands?.map(band => <BandCard key={band.id} {...band} />)}
			</div>
		</SingleColumnLayout>
	)
}

export default Bands;