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
						<TableRow key={music.id} component={Link} href={Routes.music_path({ id: music.id })}>
							<TableCell></TableCell>
							<TableCell>{music.title}</TableCell>
							<TableCell>{ }</TableCell>
							<TableCell>{ }</TableCell>
							<TableCell>{music.user?.nickname}</TableCell>
						</TableRow >
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}