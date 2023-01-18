import React from "react";

import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { FcGoogle } from "react-icons/fc";

const GoogleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <FcGoogle />
    </SvgIcon>
  );
};

export default GoogleIcon;
