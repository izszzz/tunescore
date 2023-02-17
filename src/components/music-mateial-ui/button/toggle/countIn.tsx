import React from "react";

import Timer from "@mui/icons-material/Timer";
import type { ToggleButtonProps } from "@mui/material/ToggleButton";
import ToggleButton from "@mui/material/ToggleButton";

const CountIn = (props: ToggleButtonProps) => (
  <ToggleButton {...props} value="check">
    <Timer />
  </ToggleButton>
);
export default CountIn;
