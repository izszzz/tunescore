import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ToggleButton from './ToggleButton';
interface Props {
	onLayout: (layout: boolean) => void
}
export default function Play({ onLayout }: Props) {
	return (
		<ToggleButton onToggle={onLayout}>
			<DashboardIcon />
		</ToggleButton>
	)
}