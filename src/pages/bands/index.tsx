import type { NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import BandList from "../../components/elements/list/band";
import { trpc } from "../../utils/trpc";

const Bands: NextPage = () => {
	const { data: bands } = trpc.useQuery(["band.index"]);
	return (
		<DefaultSingleColumnLayout>
			<p>bands</p>
			<Link href="/bands/new">
				<a>create band</a>
			</Link>
			<BandList bands={bands || []} />
		</DefaultSingleColumnLayout>
	)
}

export default Bands;