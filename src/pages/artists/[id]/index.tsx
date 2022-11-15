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
import { Link } from "@mui/material";
import setLocale from "../../../utils/setLocale"
import ArtistLayout from "../../../components/layouts/show/artist";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
interface ArtistProps {
	data: Prisma.ArtistGetPayload<{
		include: {
			band: true,
			musics: { include: { band: true, composers: true, lyrists: true } },
			composedMusics: { include: { band: true, composers: true, lyrists: true } },
			writtenMusics: { include: { band: true, composers: true, lyrists: true } }
		}
	}>
	bookmarked: boolean;
}
const Artist: NextPage<ArtistProps> = ({ data, bookmarked }) => {
	const router = useRouter();
	return (
		<ArtistLayout data={data} bookmarked={bookmarked} activeTab="info">
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
							<TableCell>band</TableCell>
							<TableCell>{data.band && <Chip label={setLocale(data.band.name, router)} onClick={() => data.band && router.push({ pathname: "/bands/[id]", query: { id: data.band.id } })} />}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<p>
				composedMusics
			</p>
			< TableContainer component={Paper} >
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>title</TableCell>
							<TableCell>band</TableCell>
							<TableCell>composer</TableCell>
							<TableCell>lyrist</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.composedMusics.map(music =>
							<TableRow key={music.id}>
								<TableCell><Link onClick={() => router.push({ pathname: "/musics/[id]", query: { id: music.id } })}>{setLocale(music.title, router)}</Link></TableCell>
								<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => music.band && router.push({ pathname: "/bands/[id]", query: { id: music.band.id } })} />}</TableCell>
								<TableCell> {music.composers.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
								<TableCell> {music.lyrists.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer >
			<p>
				writtenMusics
			</p>
			< TableContainer component={Paper} >
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>title</TableCell>
							<TableCell>band</TableCell>
							<TableCell>composer</TableCell>
							<TableCell>lyrist</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.composedMusics.map(music =>
							<TableRow key={music.id}>
								<TableCell><Link onClick={() => router.push({ pathname: "/musics/[id]", query: { id: music.id } })}>{setLocale(music.title, router)}</Link></TableCell>
								<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => music.band && router.push({ pathname: "/bands/[id]", query: { id: music.band.id } })} />}</TableCell>
								<TableCell> {music.composers.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
								<TableCell> {music.lyrists.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer >
			musics
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>title</TableCell>
							<TableCell>band</TableCell>
							<TableCell>composer</TableCell>
							<TableCell>lyrist</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.musics.map(music =>
							<TableRow key={music.id}>
								<TableCell><Link onClick={() => router.push({ pathname: "/musics/[id]", query: { id: music.id } })}>{setLocale(music.title, router)}</Link></TableCell>
								<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => music.band && router.push({ pathname: "/bands/[id]", query: { id: music.band.id } })} />}</TableCell>
								<TableCell> {music.composers.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
								<TableCell> {music.lyrists.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />)}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer >
		</ArtistLayout >
	)
}
export const getServerSideProps: GetServerSideProps<ArtistProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.artist.findUnique({ where: { id: ctx.query.id as string }, include: { musics: { include: { band: true, composers: true, lyrists: true } }, band: true, composedMusics: { include: { band: true, composers: true, lyrists: true } }, writtenMusics: { include: { band: true, composers: true, lyrists: true } } } })
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.artist.findFirst({
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

export default Artist;