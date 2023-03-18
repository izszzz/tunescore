import React from "react";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import type { ToggleIconButtonProps } from ".";
import ToggleIconButton from ".";
export type BookmarkToggleIconButtonProps = Omit<
  ToggleIconButtonProps,
  "onIcon" | "offIcon"
>;

const BookmarkToggleButton = ({
  ...props
}: Omit<ToggleIconButtonProps, "onIcon" | "offIcon">) => (
  <Tooltip title="Bookmark">
    <Box display="inline">
      <ToggleIconButton
        {...props}
        offIcon={<BookmarkBorderIcon />}
        onIcon={<BookmarkIcon color="primary" />}
      />
    </Box>
  </Tooltip>
);
export default BookmarkToggleButton;
