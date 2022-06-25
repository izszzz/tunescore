import * as React from 'react';
// @ts-ignore
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
	albums: any
}
export default function Albums({ albums }: Props) {
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
					{albums.map((album: any) =>
						<TableRow key={album.id} component={Link} href={Routes.album_path({ id: album.id })}>
							<TableCell></TableCell>
							<TableCell>{album.title}</TableCell>
						</TableRow >
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}