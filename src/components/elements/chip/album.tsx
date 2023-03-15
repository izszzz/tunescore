import React from "react";

import Album from "@mui/icons-material/Album";
import type { ChipProps } from "@mui/material/Chip";
import Chip from "@mui/material/Chip";

const AlbumChip = (props: ChipProps) => <Chip {...props} icon={<Album />} />;

export default AlbumChip;
