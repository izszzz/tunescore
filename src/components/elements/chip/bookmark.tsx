import React from "react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

interface BookmarkChip extends Omit<ChipProps, "icon"> {
  bookmarked: boolean;
}
const BookmarkChip = ({ bookmarked, ...props }: Omit<BookmarkChip, "icon">) => (
  <Chip
    {...props}
    component="span"
    icon={bookmarked ? <BookmarkIcon color="info" /> : <BookmarkBorderIcon />}
  />
);

export default BookmarkChip;
