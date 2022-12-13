import React, { useEffect, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export interface BookmarkToggleButtonProps
  extends Omit<IconButtonProps, "onClick" | "defaultValue"> {
  defaultValue: boolean;
  loading: boolean;
  onClick: (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
const BookmarkToggleButton = ({
  defaultValue,
  loading,
  onClick,
  ...props
}: BookmarkToggleButtonProps) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <IconButton
      {...props}
      disabled={loading}
      onClick={() => onClick(value, setValue)}
    >
      {value ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};
export default BookmarkToggleButton;
