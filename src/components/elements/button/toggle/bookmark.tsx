import React from "react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export interface BookmarkToggleButtonProps
  extends Omit<IconButtonProps, "onClick" | "value"> {
  value: boolean;
  onClick?: (value: boolean) => void;
}
const BookmarkToggleButton = ({
  value,
  onClick,
  ...props
}: BookmarkToggleButtonProps) => (
  <Tooltip title="Bookmark">
    <IconButton {...props} onClick={() => onClick && onClick(value)}>
      {value ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
    </IconButton>
  </Tooltip>
);
export default BookmarkToggleButton;
