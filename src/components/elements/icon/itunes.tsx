import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { AiFillApple } from "react-icons/ai";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const AppleIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <AiFillApple />
  </SvgIcon>
);

export default AppleIcon;
