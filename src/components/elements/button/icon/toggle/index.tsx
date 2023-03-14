import React from "react";

import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

export interface ToggleIconButtonProps
  extends Omit<IconButtonProps, "onClick" | "value"> {
  value: boolean;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onClick?: (value: boolean) => void;
}
const ToggleIconButton = ({
  value,
  onIcon,
  offIcon,
  onClick,
  ...props
}: ToggleIconButtonProps) => (
  <IconButton {...props} onClick={onClick && (() => onClick(value))}>
    {value ? onIcon : offIcon}
  </IconButton>
);
export default ToggleIconButton;
