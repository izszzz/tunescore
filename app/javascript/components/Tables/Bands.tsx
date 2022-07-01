import * as React from 'react';
import * as Routes from "../../rails-routes"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

interface Props {
	bands: any
}
export default function bands({ bands }: Props) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{bands.map((band: any) =>
						<TableRow key={band.id} component={Link} href={Routes.band_path({ id: band.id })}>
							<TableCell></TableCell>
							<TableCell>{band.name}</TableCell>
						</TableRow >
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}