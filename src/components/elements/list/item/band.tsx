import React from "react";

import Group from "@mui/icons-material/Group";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { BandListArgsType } from "../../../../helpers/band";
import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import AlbumChip from "../../chip/album";
import ArtistChip from "../../chip/artist";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import Image from "../../image";

import ListItem from ".";

export interface BandListItemProps extends ListItemProps {
  data: Prisma.BandGetPayload<BandListArgsType>;
}

const BandListItem = ({ data }: BandListItemProps) => {
  const router = useRouter(),
    name = setLocale(data.resource.name, router),
    image = getImage(data.resource.links, 60);
  return (
    <ListItem
      icon={<Group />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            <MusicChip label={data._count.musics} size="small" />
            <AlbumChip label={data._count.albums} size="small" />
            <ArtistChip label={data._count.artists} size="small" />
            <BookmarkChip
              bookmarked={isNonEmpty(data.resource.bookmarks)}
              label={data.resource._count.bookmarks}
              size="small"
            />
          </Stack>
        ),
      }}
      route={{ pathname: "/bands/[id]", query: { id: data.id } }}
    >
      {image && (
        <Image alt={name} height="60" src={image} style={{ borderRadius: 3 }} />
      )}
    </ListItem>
  );
};
export default BandListItem;
