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
										{data?.composers.map(({ id, name }) =>
											<Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Lyrist</TableCell>
									<TableCell>
										{data?.lyrists.map(({ id, name }) =>
											<Chip key={id} label={setLocale(name, router)} onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })} />
										)}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Band</TableCell>
									<TableCell>
										{data?.band && <Chip label={setLocale(data.band.name, router)} onClick={() => data?.band && router.push({ pathname: "/bands/[id]", query: { id: data.band.id } })} />}
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
								{data?.artists.map(({ id, name }) => (
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
				</>
			}
		</MusicLayout >
	)
}

export default Music;