import React from "react";

import Group from "@mui/icons-material/Group";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const BandIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Group />
  </IconButton>
);
export default BandIconButton;
