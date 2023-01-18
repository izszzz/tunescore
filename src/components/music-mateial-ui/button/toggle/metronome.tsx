import React from "react";

import type { ToggleButtonProps } from "@mui/material/ToggleButton";
import ToggleButton from "@mui/material/ToggleButton";
import { GiMetronome } from "react-icons/gi";

const Metronome = (props: ToggleButtonProps) => (
  <ToggleButton {...props} value="check">
    <GiMetronome size={24} />
  </ToggleButton>
);
export default Metronome;
