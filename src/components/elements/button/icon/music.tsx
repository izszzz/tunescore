import React from "react";

import MusicNote from "@mui/icons-material/MusicNote";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const MusicIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <MusicNote />
  </IconButton>
);
export default MusicIconButton;
