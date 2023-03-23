import React from "react";

import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton = ({ href }: { href: string }) => (
  <Tooltip title="Spotify">
    <IconButton color="success" component={Link} href={href} target="blank">
      <FaSpotify />
    </IconButton>
  </Tooltip>
);

export default SpotifyButton;
