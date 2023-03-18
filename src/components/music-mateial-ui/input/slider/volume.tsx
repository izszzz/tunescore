import React from "react";
import type { MouseEvent } from "react";

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";

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
      onChange={handleMute}
      selected={muted}
      value=""
    >
      <Box alignItems="center" display="flex" width={200}>
        <VolumeIcon muted={muted} value={volume} />
        <Slider
          className={className}
          disabled={muted}
          onChange={onVolume}
          onClick={handleClickValue}
          value={volume}
        />
      </Box>
    </ToggleButton>
  );
};

export default VolumeSliderInput;
