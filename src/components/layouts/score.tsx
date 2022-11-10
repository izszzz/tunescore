import React, { useEffect, useRef, useState } from 'react'
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
import { AlphaTabApi } from '@coderline/alphatab';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	// padding: theme.spacing(3),
	width: "100%",
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflow: "hidden",
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

interface ScoreLayoutProps {
	value: string;
}

const ScoreLayout = ({ value }: ScoreLayoutProps) => {
	const [open, setOpen] = useState(false);
	const [tracks, setTracks] = useState<any>([]);
	const apiRef = useRef<AlphaTabApi | null>(null)
	const mainRef = useRef(null)
	const handleOpen = () => setOpen(p => !p)
	const handleLoad = () => {
		const settings = {
			// file: "https://www.alphatab.net/files/canon.gp",
		};
		apiRef.current = (new window.alphaTab.AlphaTabApi(mainRef.current, settings)) as AlphaTabApi
		apiRef.current.scoreLoaded.on((score) => setTracks(score.tracks));
		// apiRef.current?.tex('\\title "Hello AlphaTab" . 1.1*4')
		apiRef.current?.tex(value);
	}
	useEffect(() => {
		console.log("apiRef.current:", apiRef.current)
		apiRef.current?.tex(value);
	}, [value])
	return (
		<Box width="100%" sx={{ display: 'flex' }}>
			<Script src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js" onReady={handleLoad} onError={(e) => console.log(e)} />
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
					{tracks.map((track: any, index: number) => (
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>
								</ListItemIcon>
								<ListItemText primary={track.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main open={open}>
				<Box ref={mainRef} />
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