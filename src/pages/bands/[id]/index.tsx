import { Locales } from "@prisma/client";
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
import Link from "@mui/material/Link";
import BandLayout from "../../../components/layouts/band";
import setLocale from "../../../utils/setLocale"

const Band: NextPage = () => {
	const router = useRouter();
	return (
		<BandLayout>
			{({ data }) => {
				return (
					<>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }}>
								<TableHead>
									<TableRow>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data?.musics?.map(music =>
										<TableRow>
											<TableCell><Link onClick={() => router.push("/musics/" + music.id)}>{setLocale(music.title, router)}</Link></TableCell>
											<TableCell> {music.composers.map(composer => <Chip label={setLocale(composer.name, router)} onClick={() => router.push("/artists/" + composer.id)} />)}</TableCell>
											<TableCell> {music.lyrists.map(lyrist => <Chip label={setLocale(lyrist.name, router)} onClick={() => router.push("/artists/" + lyrist.id)} />)}</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				)
			}

			}
		</BandLayout>
	)
}

export default Band;