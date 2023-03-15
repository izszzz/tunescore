import React from "react";

import Album from "@mui/icons-material/Album";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const AlbumIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Album />
  </IconButton>
);
export default AlbumIconButton;
