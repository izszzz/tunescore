import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ToggleButton from './ToggleButton';
interface Props {
	onCountIn: (countIn: boolean) => void
}
export default function Play({ onCountIn }: Props) {
	return (
		<ToggleButton onToggle={onCountIn}>
			<AccessTimeIcon />
		</ToggleButton>
	)
}