import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useToggle } from 'react-use';

interface Props {
	onToggle: (on: boolean) => void
}
export default function ToggleButton({ onToggle, children, ...iconButtonProps }: Props & IconButtonProps) {
	const [on, toggle] = useToggle(false)
	const handleToggle = () => {
		onToggle(on)
		toggle(!on)
	}
	return (
		<IconButton {...iconButtonProps} color={on ? "primary" : "default"} onClick={handleToggle}>
			{children}
		</IconButton>
	)
}