import React from "react";

import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { FaYoutube } from "react-icons/fa";

const YoutubeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <FaYoutube />
  </SvgIcon>
);

export default YoutubeIcon;
