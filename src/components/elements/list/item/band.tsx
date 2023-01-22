import React from "react";

import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import type { BandListArgsType } from "../../../../helpers/band";
import { getChannelImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import AlbumChip from "../../chip/album";
import ArtistChip from "../../chip/artist";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import ResourceIcon from "../../icon/resource";
import Image from "../../image";

import ListItem from ".";

export interface BandListItemProps extends ListItemProps {
  data: Prisma.BandGetPayload<BandListArgsType>;
}

const BandListItem = ({ data }: BandListItemProps) => {
  const router = useRouter();
  const name = setLocale(data.name, router);
  return (
    <ListItem
      route={{
        pathname: "/bands/[id]",
        query: { id: data.id },
      }}
      icon={<ResourceIcon resource="BAND" />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack direction="row" spacing={1}>
            <MusicChip label={data._count.musics} size="small" />
            <AlbumChip label={data._count.albums} size="small" />
            <ArtistChip label={data._count.artists} size="small" />
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={!!data.bookmarks.length}
            />
          </Stack>
        ),
      }}
    >
      {data.link?.streaming && (
        <Image
          height="60"
          alt={name}
          src={getChannelImage(data.link.streaming)?.image?.size?.medium || ""}
          style={{ borderRadius: 3 }}
        />
      )}
    </ListItem>
  );
};
export default BandListItem;
