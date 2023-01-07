import React from "react";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Tooltip from "@mui/material/Tooltip";
import type { IconButtonProps } from "@mui/material/IconButton";

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
