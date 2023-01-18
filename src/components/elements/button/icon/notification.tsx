import React from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const NotificationsIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <NotificationsIcon />
  </IconButton>
);
export default NotificationsIconButton;
