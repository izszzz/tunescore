import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface PlayButtonProps {
  onClick?: (value: boolean) => void;
}
const PlayButton = ({ onClick }: PlayButtonProps) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    onClick && onClick(toggle);
    setToggle((prev) => (prev ? false : true));
  };
  return (
    <IconButton onClick={handleClick}>
      {toggle ? <PlayArrowIcon /> : <PauseIcon />}
    </IconButton>
  );
};

export default PlayButton;
