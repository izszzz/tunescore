import React from "react";

import { SkipPrevious } from "@mui/icons-material";
import type { ToggleButtonProps } from "@mui/material/ToggleButton";
import ToggleButton from "@mui/material/ToggleButton";

const Stop = (props: ToggleButtonProps) => (
  <ToggleButton {...props}>
    <SkipPrevious />
  </ToggleButton>
);
export default Stop;
