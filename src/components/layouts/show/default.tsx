import React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";

import BookmarkToggleButton from "../../elements/button/icon/toggle/bookmark";
import type { BookmarkToggleButtonProps } from "../../elements/button/icon/toggle/bookmark";
import DefaultHeader from "../../elements/header/default";
import ResourceIcon from "../../elements/icon/resource";

import ShowLayout from "./";
import type { ShowLayoutProps } from "./";

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
          <Stack direction="row" spacing={1}>
            {tagMaps.map((tagMap) => (
              <Chip
                key={tagMap.id}
                icon={<ResourceIcon resource="TAG" />}
                label={tagMap.tag.name}
                variant="outlined"
                size="small"
              />
            ))}
          </Stack>
        </Box>
      }
    />
  );
};

export default DefaultShowLayout;
