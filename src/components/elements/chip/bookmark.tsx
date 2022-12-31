import Chip from "@mui/material/Chip";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const BookmarkChip = ({ count }: { count: number }) => (
  <Chip size="small" icon={<BookmarkBorderIcon />} label={count} />
);

export default BookmarkChip;
