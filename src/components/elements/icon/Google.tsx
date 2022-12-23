import React from "react";
import { FcGoogle } from "react-icons/fc";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Google = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <FcGoogle />
    </SvgIcon>
  );
};

export default Google;
