import React from "react";

import Flag from "@mui/icons-material/Flag";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const FlagIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Flag />
  </IconButton>
);
export default FlagIconButton;
