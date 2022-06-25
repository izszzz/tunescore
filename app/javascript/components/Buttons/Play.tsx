import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useToggle } from 'react-use';

interface Props {
	onPlayPause?: (on: boolean) => void
}
export default function Play({ onPlayPause, ...iconButtonProps }: Props & IconButtonProps) {
	const [on, toggle] = useToggle(false)
	const onClick = () => {
		onPlayPause && onPlayPause(on)
		toggle(!on)
	}
	return (
		<IconButton {...iconButtonProps} onClick={onClick} >
			{on ?
				<PauseIcon /> :
				<PlayArrowIcon />
			}
		</IconButton>
	)
}
