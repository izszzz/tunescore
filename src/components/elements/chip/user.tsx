import React from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import type { ChipProps } from "@mui/material/Chip";
import Chip from "@mui/material/Chip";

const BandChip = (props: ChipProps) => (
  <Chip {...props} icon={<AccountCircle />} />
);

export default BandChip;
