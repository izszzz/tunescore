import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import ArtistList from "../../components/elements/list/artist";
import { Prisma, PrismaClient } from "@prisma/client";
interface ArtistsProps {
	data: Prisma.ArtistGetPayload<{ include: { band: true } }>[]
}
const Artists: NextPage<ArtistsProps> = ({ data }) => {
	return (
		<DefaultSingleColumnLayout>
			<Link href="/artists/new">
				<a>create artist</a>
			</Link>
			<ArtistList artists={data} />
		</DefaultSingleColumnLayout>
	)
}
export const getServerSideProps: GetServerSideProps<ArtistsProps> = async () => {
	const prisma = new PrismaClient()
	const data = await prisma.artist.findMany({ include: { band: true } })
	return {
		props: { data },
	};
};

export default Artists;