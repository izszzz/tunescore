import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import StopIcon from '@mui/icons-material/Stop';

export default function Stop(iconButtonProps: IconButtonProps) {
	return (
		<IconButton {...iconButtonProps}>
			<StopIcon />
		</IconButton>
	)
}
