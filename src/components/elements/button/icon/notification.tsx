import React from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import type { IconButtonProps } from "@mui/material/IconButton";

const NotificationsIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <NotificationsIcon />
  </IconButton>
);
export default NotificationsIconButton;
