import React, { useEffect, useState } from 'react'

interface Props {
	onTracks: (func: (tracks: any) => void) => void
}
export default function Tracks({ onTracks }: Props) {
	const [tracks, setTracks] = useState([])
	useEffect(() => {
		console.log("tracks")
		onTracks((tracks) => { setTracks(tracks); console.log("tracks") })
	}, [])
	console.log(tracks)
	return (
		<>
			tracks
		</>
	)
}
