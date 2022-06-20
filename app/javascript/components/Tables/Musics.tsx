import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
	musics: any
}
export default function Musics({ musics }: Props) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>Title</TableCell>
						<TableCell>Artist</TableCell>
						<TableCell>Band</TableCell>
						<TableCell>User</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{musics.map((music: any) =>
						<TableRow>
							<TableCell></TableCell>
							<TableCell>{music.title}</TableCell>
							<TableCell>{ }</TableCell>
							<TableCell>{ }</TableCell>
							<TableCell>{ }</TableCell>
						</TableRow >
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}