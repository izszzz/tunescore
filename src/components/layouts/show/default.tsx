import Box from "@mui/material/Box";
import React from "react";
import BookmarkToggleButton from "../../elements/button/toggle/bookmark";
import DefaultHeader from "../header/default";
import ShowLayout from "./";
import type { ShowLayoutProps } from "./";
import type { BookmarkToggleButtonProps } from "../../elements/button/toggle/bookmark";
import { Prisma } from "@prisma/client";
import Chip from "@mui/material/Chip";
import ResourceIcon from "../../elements/icon/resource";

export interface DefaultShowLayoutProps extends ShowLayoutProps {
  bookmarkToggleButtonProps: BookmarkToggleButtonProps;
  tagMaps: Prisma.TagMapGetPayload<{ include: { tag: true } }>[];
}

const DefaultShowLayout = ({
  bookmarkToggleButtonProps,
  tagMaps,
  ...props
}: DefaultShowLayoutProps) => {
  return (
    <ShowLayout
      {...props}
      header={<DefaultHeader />}
      title={
        <Box mx={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              {props.title}
            </Box>
            <BookmarkToggleButton {...bookmarkToggleButtonProps} />
          </Box>
          {tagMaps.map((tagMap) => (
            <Chip
              icon={<ResourceIcon resource="TAG" />}
              label={tagMap.tag.name}
              variant="outlined"
            />
          ))}
        </Box>
      }
    />
  );
};

export default DefaultShowLayout;
