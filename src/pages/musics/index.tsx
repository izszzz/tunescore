import { Prisma, PrismaClient } from '@prisma/client'
import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link'
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import MusicList from "../../components/elements/list/music";
interface MusicsProps {
	data: Prisma.MusicGetPayload<{ include: { user: true } }>[]
}
const Musics: NextPage<MusicsProps> = ({ data }) => {
	return (
		<DefaultSingleColumnLayout >
			<Link href="/musics/new">
				<a>create music</a>
			</Link>
			<MusicList musics={data} />
		</DefaultSingleColumnLayout>
	)
}

export const getServerSideProps: GetServerSideProps<MusicsProps> = async () => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findMany({ include: { user: true } })
	return {
		props: { data },
	};
};

export default Musics;