import React from "react";

import SettingssIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const SettingsIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <SettingssIcon />
  </IconButton>
);
export default SettingsIconButton;
