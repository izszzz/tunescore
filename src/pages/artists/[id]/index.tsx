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
import ArtistLayout, { ArtistLayoutProps } from "../../../components/layouts/show/artist";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import { getProviders } from "next-auth/react";
interface ArtistProps extends Pick<ArtistLayoutProps, "bookmarked" | "providers"> {
	data: Prisma.ArtistGetPayload<{
		include: {
			bands: true,
			musics: { include: { band: true, composers: true, lyrists: true } },
			composedMusics: { include: { band: true, composers: true, lyrists: true } },
			writtenMusics: { include: { band: true, composers: true, lyrists: true } }
		}
	}>
}
const Artist: NextPage<ArtistProps> = ({ providers, data, bookmarked }) => {
	const router = useRouter();
	return (
		<ArtistLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="info">
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
							<TableCell>{data.bands.map(({ id, name }) => <Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/bands/[id]", query: { id } })} />)}</TableCell>
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
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const providers = await getProviders()
	const data = await prisma.artist.findUnique({ where: { id: ctx.query.id as string }, include: { musics: { include: { band: true, composers: true, lyrists: true } }, bands: true, composedMusics: { include: { band: true, composers: true, lyrists: true } }, writtenMusics: { include: { band: true, composers: true, lyrists: true } } } })
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
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};

export default Artist;