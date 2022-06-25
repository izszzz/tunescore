import React, { MouseEvent } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface VolumeIconProps {
	value?: number;
	muted?: boolean;
}
const VolumeIcon: React.FC<VolumeIconProps> = ({
	value,
	muted,
}: VolumeIconProps) => {
	// eslint-disable-next-line no-console
	if (muted || !value) return <VolumeOffIcon />;
	if (value >= 0.6) return <VolumeUpIcon />;
	if (value >= 0.3) return <VolumeDownIcon />;
	return <VolumeMuteIcon />;
};
VolumeIcon.defaultProps = {
	value: undefined,
	muted: false,
};
interface VolumeProps {
	className?: string;
	volume: number;
	size?: "small";
	muted?: boolean;
	onMute?: () => void;
	onVolume?: (
		_e: Event,
		newValue: number | number[]
	) => void;
}
const Volume: React.FC<VolumeProps> = ({
	className,
	volume,
	muted,
	onMute,
	onVolume,
}: VolumeProps) => {
	// handlers
	const handleClickValue = (e: MouseEvent) => e.stopPropagation();
	const handleMute = () => {
		if (onMute) onMute();
	};
	return (
		<ToggleButton
			className={className}
			value=""
			selected={muted}
			onChange={handleMute}
		>
			<Box width={200} display="flex" alignItems="center">
				<VolumeIcon value={volume} muted={muted} />
				<Slider
					size="small"
					className={className}
					disabled={muted}
					value={volume}
					onClick={handleClickValue}
					onChange={onVolume}
				/>
			</Box>
		</ToggleButton>
	);
};
Volume.defaultProps = {
	className: "",
	muted: false,
	onVolume: undefined,
	onMute: undefined,
};

export default Volume;