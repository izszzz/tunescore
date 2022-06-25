import React, { useEffect, useState } from 'react'

interface Props {
	onPlayerProgress: (func: (value: number) => void) => void
}
export default function PlayerProgress({ onPlayerProgress }: Props) {
	const [percentage, setPercentage] = useState(0)

	useEffect(() => {
		onPlayerProgress(
			(value) =>
				setPercentage(value)
		)
	}, [onPlayerProgress])
	if (percentage >= 100) return <></>
	return (
		<>{percentage}%</>
	)
}
