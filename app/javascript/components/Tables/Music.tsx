import React from "react"
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditDialog from "../Dialog/Edit";

interface Props {
	music: any
}
export default function Music({ music }: Props) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Info</TableCell>
						<TableCell>Edit</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Band</TableCell>
						<TableCell>
							<EditDialog dialogTitle="Band" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>User</TableCell>
						<TableCell>{music?.user?.nickname}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}