import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ItunesIcon from "../icon/itunes";
const ItunesButton = ({ href }: { href: string }) => (
  <Button
    component={Link}
    startIcon={<ItunesIcon />}
    color="error"
    target="blank"
    href={href}
  >
    Itunes
  </Button>
);

export default ItunesButton;
