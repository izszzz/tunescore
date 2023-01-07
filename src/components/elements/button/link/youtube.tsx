import React from "react";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import YoutubeIcon from "../../icon/youtube";
const YoutubeButton = ({ href }: { href: string }) => (
  <Tooltip title="Youtube">
    <IconButton
      component={Link}
      color="error"
      target="blank"
      href={"https://www.youtube.com/channel/" + href}
    >
      <YoutubeIcon />
    </IconButton>
  </Tooltip>
);

export default YoutubeButton;
