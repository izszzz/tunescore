import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import YoutubeIcon from "../icon/youtube";
const YoutubeButton = ({ href }: { href: string }) => (
  <Button
    component={Link}
    startIcon={<YoutubeIcon />}
    color="error"
    target="blank"
    href={href}
  >
    Youtube
  </Button>
);

export default YoutubeButton;
