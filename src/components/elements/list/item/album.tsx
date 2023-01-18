import React from "react";

import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import type { AlbumListArgsType } from "../../../../helpers/album";
import { getContentImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import ResourceIcon from "../../icon/resource";
import Image from "../../image";


import ListItem from ".";

export interface AlbumListItemProps {
  data: Prisma.AlbumGetPayload<AlbumListArgsType>;
}
const AlbumListItem = ({ data }: AlbumListItemProps) => {
  const router = useRouter();
  const title = setLocale(data.title, router);
  return (
    <ListItem
      route={{
        pathname: "/albums/[id]",
        query: { id: data.id },
      }}
      icon={<ResourceIcon resource="ALBUM" />}
      listItemTextProps={{
        primary: title,
        secondary: (
          <Stack direction="row" spacing={1}>
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={!!data.bookmarks.length}
            />
            <MusicChip label={data._count.musics} size="small" />
          </Stack>
        ),
      }}
    >
      {data.link?.streaming && (
        <Image
          height="60"
          alt={title}
          src={getContentImage(data.link.streaming)?.image?.size?.medium || ""}
          style={{ borderRadius: 3 }}
        />
      )}
    </ListItem>
  );
};

export default AlbumListItem;
