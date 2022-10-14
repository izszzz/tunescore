import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../components/layouts/music";

const Music: NextPage = () => {
	const router = useRouter();
	return (
		<MusicLayout>
			{(props) =>
				<>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
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
										{props.data?.composers.map(({ composer }) =>
											<Chip label={composer.name} onClick={() => router.push("/artists/" + composer.id)} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Lyrist</TableCell>
									<TableCell>
										{props.data?.lyrists.map(({ lyrist }) =>
											<Chip label={lyrist.name} onClick={() => router.push("/artists/" + lyrist.id)} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Band</TableCell>
									<TableCell>
										<Chip label={props.data?.band?.name} onClick={() => router.push("/bands/" + props.data?.band?.id)} />
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
								{props.data?.artists.map(artist => artist.artist).map(artist => (
									<TableRow key={artist.id}>
										<TableCell />
										<TableCell >
											<Chip label={artist.name} onClick={() => router.push("/artists/" + artist.id)} />
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