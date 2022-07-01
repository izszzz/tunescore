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
	artists: any
}
export default function Artists({ artists }: Props) {
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
					{artists.map((artist: any) =>
						<TableRow key={artist.id} component={Link} href={Routes.artist_path({ id: artist.id })}>
							<TableCell></TableCell>
							<TableCell>{artist.name}</TableCell>
						</TableRow >
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}