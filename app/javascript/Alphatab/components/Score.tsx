import React, { RefObject } from 'react'
import Box from "@mui/material/Box"

interface Props {
	mainRef: RefObject<HTMLDivElement>
	viewportRef: RefObject<HTMLDivElement>
}
export default function Score({ mainRef, viewportRef }: Props) {
	return (
		<Box ref={viewportRef}>
			<Box ref={mainRef} height="100%" width="100%" />
		</Box>
	)
}
