import React from "react";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import ToggleIconButton from "../../../../elements/button/icon/toggle";
import type { ToggleIconButtonProps } from "../../../../elements/button/icon/toggle";

const PlayButton = (
  props: Omit<ToggleIconButtonProps, "onIcon" | "offIcon">
) => (
  <ToggleIconButton
    {...props}
    offIcon={<PauseIcon />}
    onIcon={<PlayArrowIcon />}
  />
);

export default PlayButton;
