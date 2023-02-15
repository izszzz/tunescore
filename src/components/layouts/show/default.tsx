import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import type { Prisma, ReportUnionType } from "@prisma/client";

import FlagIconButton from "../../elements/button/icon/flag";
import type { BookmarkToggleIconButtonProps } from "../../elements/button/icon/toggle/bookmark";
import BookmarkToggleButton from "../../elements/button/icon/toggle/bookmark";
import DefaultHeader from "../../elements/header/default";
import ResourceIcon from "../../elements/icon/resource";

import ShowLayout from "./";
import type { ShowLayoutProps } from "./";

export interface DefaultShowLayoutProps extends ShowLayoutProps {
  bookmarkToggleButtonProps: BookmarkToggleIconButtonProps;
  reportButtonProps: { unionType: ReportUnionType; id: string };
  tagMaps: Prisma.TagMapGetPayload<{ include: { tag: true } }>[];
}

const DefaultShowLayout = ({
  bookmarkToggleButtonProps,
  reportButtonProps,
  tagMaps,
  ...props
}: DefaultShowLayoutProps) => {
  const { show } = useModal("report-dialog");
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
            <Box>
              <BookmarkToggleButton {...bookmarkToggleButtonProps} />
              <FlagIconButton onClick={() => show(reportButtonProps)} />
            </Box>
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
