import React from "react";

import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { FaSpotify } from "react-icons/fa";

const SpotifyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <FaSpotify />
    </SvgIcon>
  );
};

export default SpotifyIcon;
