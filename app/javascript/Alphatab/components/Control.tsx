import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// @ts-ignore
import { AlphatabContext, onPlayPause, onStop, onVolume, onCountIn, onPlayerProgress, onLoop, onMetronome, onOverlay, onTracks, onLayout } from '../../contexts/Alphatab';
import PlayButton from '../../components/Buttons/Play';
import StopButton from '../../components/Buttons/Stop';
import CountInButton from './Buttons/CountIn';
import LoopButton from './Buttons/Loop';
import LayoutButton from './Buttons/Layout';
import Volume from '../../components/Buttons/Volume';
import Tracks from './Tracks';
import PlayerProgress from './Buttons/PlayerProgress';
import MetronomeButton from './Buttons/Metronome';
import Overlay from './Overlay';

interface Props {
	children: React.ReactNode
}
export default function Control({ children }: Props) {
	const api = useContext(AlphatabContext)
	const [volume, setVolume] = useState(100);
	const handleVolume = (_e: Event, newValue: number | number[]) => {
		if (!Array.isArray(newValue)) {
			onVolume(api, newValue)
			setVolume(newValue);
		}
	}
	const handleCountIn = (countIn: boolean) => onCountIn(api, countIn)
	return (
		<Box position="relative">
			<Overlay onOverlay={onOverlay(api)} />
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" color="inherit">
					<Toolbar>
						<StopButton onClick={onStop(api)} />
						<PlayButton onPlayPause={onPlayPause(api)} />
						<PlayerProgress onPlayerProgress={onPlayerProgress(api)} />
						<Volume size="small" volume={volume} onVolume={handleVolume} />
						<CountInButton onCountIn={handleCountIn} />
						<MetronomeButton onMetronome={onMetronome(api)} />
						<LoopButton onLoop={onLoop(api)} />
						<LayoutButton onLayout={onLayout(api)} />
						{children}
					</Toolbar>
				</AppBar>
				<Toolbar />
			</Box>
			<Tracks onTracks={onTracks(api)} />
		</Box>
	)
}
