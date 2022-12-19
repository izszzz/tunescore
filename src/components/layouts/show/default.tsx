import Box from "@mui/material/Box";
import React from "react";
import BookmarkToggleButton, {
  BookmarkToggleButtonProps,
} from "../../elements/button/toggle/bookmark";
import DefaultHeader from "../header/default";
import ShowLayout, { ShowLayoutProps } from "./";

export interface DefaultShowLayoutProps extends ShowLayoutProps {
  bookmarkToggleButtonProps: BookmarkToggleButtonProps;
}

const DefaultShowLayout = ({
  bookmarkToggleButtonProps,
  ...props
}: DefaultShowLayoutProps) => {
  return (
    <ShowLayout
      {...props}
      header={<DefaultHeader />}
      title={
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mx={3}
        >
          <Box display="flex" alignItems="center">
            {props.title}
          </Box>
          <BookmarkToggleButton {...bookmarkToggleButtonProps} />
        </Box>
      }
    />
  );
};

export default DefaultShowLayout;
