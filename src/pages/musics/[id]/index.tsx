import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { NextPage } from "next";
import Link from 'next/link'
import { useRouter } from "next/router";
import MusicLayout from "../../../components/layouts/music";
import Modal from '@mui/material/Modal';
import { trpc } from "../../../utils/trpc";
import Box from "@mui/material/Box";
import { useRef, useState } from "react";
import Portal from '@mui/material/Portal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const Music: NextPage = () => {
	const router = useRouter();
	const modal = useRef(null)
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<MusicLayout>
			{({ band }) =>
				<>
					{console.log(band)}
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
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Lyrist</TableCell>
									<TableCell>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Band</TableCell>
									<TableCell>
										<Link href={`/bands/${band.id}`}>
											<a>
												{band.name}
											</a>
										</Link>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Link href={`/musics/${router.query.id}/edit`} passHref>
						<Button>Edit</Button>
					</Link>
					<Modal open={open} onClose={handleClose}>
						<Box>

						</Box>
					</Modal>
				</>
			}
		</MusicLayout >
	)
}

export default Music;