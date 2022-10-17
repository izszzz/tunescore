import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

const AlphatabApi = () => {
	const mainRef = useRef(null)
	useEffect(() => {
		// initialize alphatab
		const settings = {
			file: "https://www.alphatab.net/files/canon.gp",
		};
		if (window.alphaTab) {
			console.log("loaded");
			const api = new window.alphaTab.AlphaTabApi(mainRef.current, settings);
		}
	}, [])
	return (

		<>
			<Script src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js" strategy='beforeInteractive' />
			<p>score</p>
			<div ref={mainRef} />
		</>
	)
}

declare global {
	interface Window {
		alphaTab: any;
	}
}

export default AlphatabApi