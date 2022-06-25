import React from 'react'
import ToggleButton from './ToggleButton';
import LoopIcon from '@mui/icons-material/Loop';

interface Props {
	onLoop: (loop: boolean) => void
}
export default function Loop({ onLoop }: Props) {
	return (
		<ToggleButton onToggle={onLoop}>
			<LoopIcon />
		</ToggleButton>
	)
}
