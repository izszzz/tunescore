import React from "react";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";

import SpotifyIcon from "../../icon/spotify";
const SpotifyButton = ({ href }: { href: string }) => (
  <Tooltip title="Spotify">
    <IconButton component={Link} color="success" target="blank" href={href}>
      <SpotifyIcon />
    </IconButton>
  </Tooltip>
);

export default SpotifyButton;
