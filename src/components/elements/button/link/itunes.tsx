import React from "react";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AppleIcon from "../../icon/itunes";
const AppleButton = ({ href }: { href: string }) => (
  <Tooltip title="Apple Music">
    <IconButton component={Link} color="error" target="blank" href={href}>
      <AppleIcon />
    </IconButton>
  </Tooltip>
);

export default AppleButton;
