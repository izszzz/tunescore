import React from "react";
import { SiItunes } from "react-icons/si";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const Google = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <SiItunes />
    </SvgIcon>
  );
};

export default Google;
