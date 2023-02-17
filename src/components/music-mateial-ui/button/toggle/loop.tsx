import React from "react";

import Repeat from "@mui/icons-material/Repeat";
import type { ToggleButtonProps } from "@mui/material/ToggleButton";
import ToggleButton from "@mui/material/ToggleButton";

const Loop = (props: ToggleButtonProps) => (
  <ToggleButton {...props} value="check">
    <Repeat />
  </ToggleButton>
);
export default Loop;
