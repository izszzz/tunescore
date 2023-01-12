import React from "react";
import { FaSpotify } from "react-icons/fa";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const SpotifyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <FaSpotify />
    </SvgIcon>
  );
};

export default SpotifyIcon;
