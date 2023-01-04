import React from "react";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import type { IconButtonProps } from "@mui/material/IconButton";

const CloseIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Close />
  </IconButton>
);
export default CloseIconButton;
