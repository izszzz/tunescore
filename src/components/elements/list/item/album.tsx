import React from "react";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import { getContentImage } from "../../../../helpers/image";
import Image from "../../image";
import type { AlbumListArgsType } from "../../../../helpers/album";
import type { Prisma } from "@prisma/client";
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
