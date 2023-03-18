import React from "react";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

import AppleIcon from "../../icon/itunes";
const AppleButton = ({ href }: { href: string }) => (
  <Tooltip title="Apple Music">
    <IconButton color="error" component={Link} href={href} target="blank">
      <AppleIcon />
    </IconButton>
  </Tooltip>
);

export default AppleButton;
