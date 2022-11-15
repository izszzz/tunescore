import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import BandList from "../../components/elements/list/band";
import { Prisma, PrismaClient } from "@prisma/client";

interface BandsProps {
	data: Prisma.BandGetPayload<{ include: { _count: { select: { artists: true, musics: true } } } }>[]
}
const Bands: NextPage<BandsProps> = ({ data }) => {
	return (
		<DefaultSingleColumnLayout>
			<Link href="/bands/new">
				<a>create band</a>
			</Link>
			<BandList bands={data} />
		</DefaultSingleColumnLayout>
	)
}

export const getServerSideProps: GetServerSideProps<BandsProps> = async () => {
	const prisma = new PrismaClient()
	const data = await prisma.band.findMany({ include: { _count: { select: { artists: true, musics: true } } } })
	return {
		props: { data },
	};
};

export default Bands;