import React from "react";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import MusicChip from "../../chip/music";
import ArtistChip from "../../chip/artist";
import AlbumChip from "../../chip/album";
import BookmarkChip from "../../chip/bookmark";
import { getChannelImage } from "../../../../helpers/image";
import Image from "../../image";
import type { BandListArgsType } from "../../../../helpers/band";
import type { Prisma } from "@prisma/client";
import ListItem from ".";
export interface BandListItemProps {
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
