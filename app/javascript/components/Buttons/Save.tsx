import React from 'react'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Button from '@mui/material/Button';

interface Props {
	onSave: () => void
}
export default function Save({ onSave }: Props) {
	const handleSave = () => onSave()
	return (
		<Button variant="contained" startIcon={<UpgradeIcon />} onClick={handleSave}>Save</Button>
	)
}
