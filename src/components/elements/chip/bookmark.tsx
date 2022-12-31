import Chip, { ChipProps } from "@mui/material/Chip";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const BookmarkChip = (props: Omit<ChipProps, "icon">) => (
  <Chip {...props} icon={<BookmarkBorderIcon />} />
);

export default BookmarkChip;
