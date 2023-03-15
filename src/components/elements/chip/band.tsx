import React from "react";

import Group from "@mui/icons-material/Group";
import type { ChipProps } from "@mui/material/Chip";
import Chip from "@mui/material/Chip";

const BandChip = (props: ChipProps) => <Chip {...props} icon={<Group />} />;

export default BandChip;
