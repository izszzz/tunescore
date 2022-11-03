import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { NextPage } from "next"
import { useRouter } from "next/router";
import MusicLayout from "../../../components/layouts/music";
import setLocale from "../../../utils/setLocale"

const Music: NextPage = () => {
	const router = useRouter();
	return (
		<MusicLayout>
			{({ data }) =>
				<>
					<Button variant="contained" onClick={() => router.push("/scores/" + router.query.id)} fullWidth>Watch Score</Button>
					<Button variant="contained" onClick={() => router.push({ pathname: "/scores/[id]/edit", query: { id: router.query.id } })} fullWidth>Edit Score</Button>
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
										{data?.composers.map(composer =>
											<Chip key={composer.id} label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Lyrist</TableCell>
									<TableCell>
										{data?.lyrists.map(lyrist =>
											<Chip key={lyrist.id} label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Band</TableCell>
									<TableCell>
										{data?.band && <Chip label={setLocale(data?.band?.name, router)} onClick={() => router.push("/bands/" + data?.band?.id)} />}
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
								{data?.artists.map(artist => (
									<TableRow key={artist.id}>
										<TableCell />
										<TableCell >
											<Chip label={setLocale(artist.name, router)} onClick={() => router.push("/artists/" + artist.id)} />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</>
			}
		</MusicLayout >
	)
}

export default Music;