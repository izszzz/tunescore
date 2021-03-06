import React from 'react'
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import ToggleButton from './ToggleButton';

interface Props {
	onMetronome: (metronome: boolean) => void
}
export default function Metronome({ onMetronome }: Props) {
	return (
		<ToggleButton onToggle={onMetronome}>
			<AlignHorizontalCenterIcon />
		</ToggleButton>
	)
}
