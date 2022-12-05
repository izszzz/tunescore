// references
// https://mui.com/material-ui/react-drawer/#mini-variant-drawer
import { AlphaTabApi } from "@coderline/alphatab";
import { useToggle } from "react-use";
import React, { useState } from "react";
import Header from ".";
import PlayButton from "../../elements/button/play";
import VolumeSliderInput from "../../elements/input/slider/volume";

interface ScoreHeaderProps {
	api: React.MutableRefObject<AlphaTabApi | null>
	children: React.ReactNode;
}
const ScoreHeader = ({ api, children }: ScoreHeaderProps) => {
	const [masterVolume, setMasterVolume] = useState(100);
	const [muted, toggleMuted] = useToggle(false);
	const handlePlay = () => api.current?.playPause()
	const handleMute = () => {
		if (!api.current) return
		toggleMuted()
		if (api.current.masterVolume === 100) api.current.masterVolume = masterVolume / 100
		else api.current.masterVolume = 0
	}
	const handleVolume = (_event: Event, value: number | number[]) => {
		if (!api.current) return;
		if (!Array.isArray(value)) {
			setMasterVolume(value)
			api.current.masterVolume = value / 100;
		}
	}

	return (
		<Header position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }} >
			{children}
			<PlayButton onClick={handlePlay} />
			<VolumeSliderInput
				muted={muted}
				volume={masterVolume}
				onMute={handleMute}
				onVolume={handleVolume} />
		</Header>
	);
};

export default ScoreHeader;