import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Prisma, PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router";
import MusicLayout from "../../../components/layouts/show/music";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import setLocale from "../../../utils/setLocale"
interface MusicProps {
	data: Prisma.MusicGetPayload<{ include: { artists: true, band: true, composers: true, lyrists: true, user: true } }>
	bookmarked: boolean;
}
const Music: NextPage<MusicProps> = ({ data, bookmarked }) => {
	const router = useRouter();
	return (
		<MusicLayout data={data} bookmarked={bookmarked} activeTab="info">
			<Button variant="contained" onClick={() => router.push({ pathname: "/scores/[id]", query: { id: router.query.id as string } })} fullWidth>Watch Score</Button>
			<Button variant="contained" onClick={() => router.push({ pathname: "/scores/[id]/edit", query: { id: router.query.id as string } })} fullWidth>Edit Score</Button>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Composer</TableCell>
							<TableCell>
								{data.composers.map(({ id, name }) =>
									<Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Lyrist</TableCell>
							<TableCell>
								{data.lyrists.map(({ id, name }) =>
									<Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Band</TableCell>
							<TableCell>
								{data.band && <Chip label={setLocale(data.band.name, router)} onClick={() => data.band && router.push({ pathname: "/bands/[id]", query: { id: data.band.id } })} />}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.artists.map(({ id, name }) => (
							<TableRow key={id}>
								<TableCell />
								<TableCell >
									<Chip label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</MusicLayout >
	)
}

export const getServerSideProps: GetServerSideProps<MusicProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.music.findUnique({ where: { id: ctx.query.id as string }, include: { artists: true, band: true, composers: true, lyrists: true, user: true } })
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.music.findFirst({
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

export default Music;