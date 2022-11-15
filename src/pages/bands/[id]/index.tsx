import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import BandLayout from "../../../components/layouts/show/band";
import setLocale from "../../../utils/setLocale"
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
interface BandProps {
	data: Prisma.BandGetPayload<{
		include: {
			musics: { include: { band: true, composers: true, lyrists: true } },
			artists: true
		}
	}>
	bookmarked: boolean;
}

const Band: NextPage<BandProps> = ({ data, bookmarked }) => {
	const router = useRouter();
	return (
		<BandLayout data={data} bookmarked={bookmarked} activeTab="info">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>music</TableCell>
							<TableCell>composer</TableCell>
							<TableCell>lyrist</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.musics.map(music =>
							<TableRow key={music.id}>
								<TableCell><Link onClick={() => router.push({ pathname: "/musics/[id]", query: { id: music.id } })}>{setLocale(music.title, router)}</Link></TableCell>
								<TableCell> {music.composers.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
								<TableCell> {music.lyrists.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.artists.map(({ id, name }) =>
							<TableRow key={id}>
								<TableCell><Link onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })}>{setLocale(name, router)}</Link></TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</BandLayout>
	)
}
export const getServerSideProps: GetServerSideProps<BandProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.band.findUnique({ where: { id: ctx.query.id as string }, include: { musics: { include: { band: true, composers: true, lyrists: true } }, artists: true, } })
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.band.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length },
	};
};

export default Band;