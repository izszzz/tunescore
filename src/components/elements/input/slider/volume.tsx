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
  if (muted || !value) return <VolumeOffIcon />;
  if (value >= 0.6) return <VolumeUpIcon />;
  if (value >= 0.3) return <VolumeDownIcon />;
  return <VolumeMuteIcon />;
};
interface VolumeProps {
  className?: string;
  volume: number;
  muted?: boolean;
  onMute?: () => void;
  onVolume?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}
const VolumeSliderInput: React.FC<VolumeProps> = ({
  className,
  volume,
  muted,
  onMute,
  onVolume,
}: VolumeProps) => {
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

export default VolumeSliderInput;
