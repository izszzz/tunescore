import React from "react";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

import YoutubeIcon from "../../icon/youtube";
const YoutubeButton = ({ href }: { href: string }) => (
  <Tooltip title="Youtube">
    <IconButton
      color="error"
      component={Link}
      href={href}
      target="blank"
    >
      <YoutubeIcon />
    </IconButton>
  </Tooltip>
);

export default YoutubeButton;
