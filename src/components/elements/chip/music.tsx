import React from "react";

import MusicNote from "@mui/icons-material/MusicNote";
import type { ChipProps } from "@mui/material/Chip";
import Chip from "@mui/material/Chip";

const MusicChip = (props: ChipProps) => (
  <Chip {...props} icon={<MusicNote />} />
);
export default MusicChip;
