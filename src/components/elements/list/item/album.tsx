import React from "react";

import Album from "@mui/icons-material/Album";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { AlbumListArgsType } from "../../../../helpers/album";
import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import ArtistChip from "../../chip/artist";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import Image from "../../image";

import ListItem from ".";

export interface AlbumListItemProps extends ListItemProps {
  data: Prisma.AlbumGetPayload<AlbumListArgsType>;
}
const AlbumListItem = ({ data }: AlbumListItemProps) => {
  const router = useRouter();
  const title = setLocale(data.resource.name, router);
  return (
    <ListItem
      icon={<Album />}
      listItemTextProps={{
        primary: title,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            <BookmarkChip
              bookmarked={isNonEmpty(data.resource.bookmarks)}
              label={data.resource._count.bookmarks}
              size="small"
            />
            <MusicChip label={data._count.musics} size="small" />
            <ArtistChip label={data._count.artists} size="small" />
          </Stack>
        ),
      }}
      route={{
        pathname: "/albums/[id]",
        query: { id: data.id },
      }}
    >
      <Image
        alt={title}
        height="60"
        src={getImage(data.resource.links, 60) || ""}
        style={{ borderRadius: 3 }}
      />
    </ListItem>
  );
};

export default AlbumListItem;
