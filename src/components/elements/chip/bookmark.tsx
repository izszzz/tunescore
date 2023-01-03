import Chip, { ChipProps } from "@mui/material/Chip";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface BookmarkChip extends Omit<ChipProps, "icon"> {
  bookmarked: boolean;
}
const BookmarkChip = ({ bookmarked, ...props }: Omit<BookmarkChip, "icon">) => (
  <Chip
    {...props}
    icon={bookmarked ? <BookmarkIcon color="info" /> : <BookmarkBorderIcon />}
  />
);

export default BookmarkChip;
