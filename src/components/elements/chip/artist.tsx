import React from "react";

import Person from "@mui/icons-material/Person";
import type { ChipProps } from "@mui/material/Chip";
import Chip from "@mui/material/Chip";

const ArtistChip = (props: ChipProps) => <Chip {...props} icon={<Person />} />;

export default ArtistChip;
