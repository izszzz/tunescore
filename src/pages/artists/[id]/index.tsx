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
import setLocale from "../../../utils/setLocale"
import ArtistLayout from "../../../components/layouts/artist";

const Music: NextPage = () => {
	const router = useRouter();
	return (
		<ArtistLayout>
			{({ data }) => {
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
										<TableCell>{data?.band && <Chip label={setLocale(data.band.name, router)} onClick={() => router.push("/bands/" + data.band?.id)} />}</TableCell>
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
									{data?.composedMusics.map(music =>
										<TableRow key={music.id}>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => router.push("/bands/" + music.band?.id)} />}</TableCell>
											<TableCell> {music.composers.map(composer => <Chip key={composer.id} label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip key={lyrist.id} label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
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
									{data?.composedMusics.map(music =>
										<TableRow key={music.id}>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => router.push("/bands/" + music.band?.id)} />}</TableCell>
											<TableCell> {music.composers.map(composer => <Chip key={composer.id} label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip key={lyrist.id} label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
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
									{data?.musics.map(music =>
										<TableRow key={music.id}>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell>{music.band && <Chip label={setLocale(music.band.name, router)} onClick={() => router.push("/bands/" + music.band?.id)} />}</TableCell>
											<TableCell> {music.composers.map(composer => <Chip key={composer.id} label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip key={lyrist.id} label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
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