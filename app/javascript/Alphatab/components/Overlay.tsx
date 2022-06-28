import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useEffect } from 'react'

interface Props {
	onOverlay: (start: () => void, finish: () => void) => void;
}
export default function Overlay({ onOverlay }: Props) {
	const [open, setOpen] = React.useState(true);
	useEffect(() => {
		onOverlay(() => setOpen(true), () => setOpen(false))
	}, [onOverlay])

	return (
		<Backdrop
			sx={{ color: '#fff' }}
			open={open}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}
