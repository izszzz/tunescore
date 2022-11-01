import type { NextPage } from "next";
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
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../utils/setLocale"
import ArtistLayout from "../../../components/layouts/artist";

const Music: NextPage = () => {
	const router = useRouter();
	const { data: artist } = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	return (
		<ArtistLayout>
			{props => {
				return (
					<>
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
										<TableCell>{artist?.band && <Chip label={setLocale(artist.band.name, router)} onClick={() => router.push("/bands/" + artist.band?.id)} />}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
						composedMusics
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
									{artist?.composedMusics.map(music =>
										<TableRow>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => router.push("/bands/" + music.band?.id)} />}</TableCell>
											<TableCell> {music.composers.map(composer => <Chip label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer >
						writtenMusics
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
									{artist?.composedMusics.map(music =>
										<TableRow>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => router.push("/bands/" + music.band?.id)} />}</TableCell>
											<TableCell> {music.composers.map(composer => <Chip label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer >
					</>
				)
			}}
		</ArtistLayout >
	)
}

export default Music;