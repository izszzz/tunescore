import React, { useRef, useState } from 'react'
import Script from 'next/script'
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ScoreHeader from './header/score'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

const ScoreLayout = () => {
	const [open, setOpen] = useState(true);
	const apiRef = useRef<any>(null)
	const mainRef = useRef(null)
	const handleOpen = () => setOpen(p => !p)
	const handleLoad = () => {
		const settings = {
			// file: "https://www.alphatab.net/files/canon.gp",
		};
		apiRef.current = new window.alphaTab.AlphaTabApi(mainRef.current, settings);
		apiRef.current?.tex('\\title "Hello AlphaTab" . 1.1*4')
	}
	return (
		<Box sx={{ display: 'flex' }}>

			<Script src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js" onReady={handleLoad} strategy="beforeInteractive" />
			<Drawer variant="persistent"
				anchor="left"
				open={open}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}>
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main open={open}>
				<div ref={mainRef} />
			</Main>
			<ScoreHeader api={apiRef} >
				<IconButton onClick={handleOpen}>
					<MenuIcon />
				</IconButton>
			</ScoreHeader>
		</Box>
	)
}

declare global {
	interface Window {
		alphaTab: any;
	}
}

export default ScoreLayout