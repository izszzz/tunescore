import React from "react";
import { SiItunes } from "react-icons/si";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Google = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <SiItunes />
  </SvgIcon>
);

export default Google;
