import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { GetServerSideProps, NextPage } from "next"
import { getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import ArtistChip from "../../../components/elements/chip/artist";
import BandChip from "../../../components/elements/chip/band";
import MusicLayout, { MusicLayoutProps } from "../../../components/layouts/show/music";
import ItunesButton from "../../../components/elements/button/itunes"
import YoutubeButton from "../../../components/elements/button/youtube"
import setLocale from "../../../utils/setLocale"
import { trpc } from "../../../utils/trpc";
export type MusicProps = Pick<MusicLayoutProps, "providers">
const Music: NextPage<MusicProps> = ({ providers }) => {
	const router = useRouter();
	const { data } = trpc.useQuery(["music.show", { id: router.query.id as string }],);
	if (!data) return <></>
	return (
		<MusicLayout providers={providers} data={data} bookmarked={data.bookmarked} activeTab="info">
			{data.link?.streaming?.itunes && <ItunesButton href={data.link?.streaming?.itunes} />}
			{data.link?.streaming?.youtube && <YoutubeButton href={`https://www.youtube.com/watch?v=${data.link?.streaming?.youtube}`} />}
			<Button variant="contained" onClick={() => router.push({ pathname: "/scores/[id]", query: { id: router.query.id as string } })} fullWidth>Watch Score</Button>
			<Button variant="contained" onClick={() => router.push({ pathname: "/scores/[id]/edit", query: { id: router.query.id as string } })} fullWidth>Edit Score</Button>
			<TableContainer component={Paper}>
				<Table>
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
									<ArtistChip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Lyrist</TableCell>
							<TableCell>
								{data.lyrists.map(({ id, name }) =>
									<ArtistChip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Band</TableCell>
							<TableCell>
								{data.band && <BandChip label={setLocale(data.band.name, router)} onClick={() => data.band && router.push({ pathname: "/bands/[id]", query: { id: data.band.id } })} />}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.artists.map(({ id, name }) => (
							<TableRow key={id}>
								<TableCell />
								<TableCell >
									<ArtistChip label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</MusicLayout >
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders()
	return {
		props: { providers },
	};
};

export default Music;