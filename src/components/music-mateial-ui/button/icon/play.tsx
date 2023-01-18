import React from "react";
import { useToggle } from "react-use";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";

interface PlayButtonProps extends Omit<IconButtonProps, "onClick"> {
  onClick?: (value: boolean) => void;
}
const PlayButton = ({ onClick }: PlayButtonProps) => {
  const [on, toggle] = useToggle(true),
    handleClick = () => {
      onClick && onClick(on);
      toggle();
    };
  return (
    <IconButton onClick={handleClick}>
      {on ? <PlayArrowIcon /> : <PauseIcon />}
    </IconButton>
  );
};

export default PlayButton;
