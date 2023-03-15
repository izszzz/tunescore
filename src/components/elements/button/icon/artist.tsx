import React from "react";

import Person from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";

const ArtistIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <Person />
  </IconButton>
);
export default ArtistIconButton;
