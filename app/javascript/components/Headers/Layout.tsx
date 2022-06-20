import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface Props {
	children: React.ReactNode
}
export default function Layout({ children }: Props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="inherit">
				<Toolbar>
					{children}
				</Toolbar>
			</AppBar>
		</Box>
	)
}