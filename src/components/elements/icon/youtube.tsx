import React from "react";
import { FaYoutube } from "react-icons/fa";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Youtube = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <FaYoutube />
    </SvgIcon>
  );
};

export default Youtube;
