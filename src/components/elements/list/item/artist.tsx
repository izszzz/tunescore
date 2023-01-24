import React from "react";

import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import type { ArtistListArgsType } from "../../../../helpers/artist";
import { getChannelImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import BandChip from "../../chip/band";
import BookmarkChip from "../../chip/bookmark";
import ResourceIcon from "../../icon/resource";
import Image from "../../image";

import ListItem from ".";

export interface ArtistListItemProps extends ListItemProps {
  data: Prisma.ArtistGetPayload<ArtistListArgsType>;
}
const ArtistListItem = ({ data, children }: ArtistListItemProps) => {
  const router = useRouter();
  const name = setLocale(data.name, router);
  return (
    <ListItem
      route={{
        pathname: "/artists/[id]",
        query: { id: data.id },
      }}
      icon={<ResourceIcon resource="ARTIST" />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack direction="row" spacing={1}>
            {data.bands[0] && (
              <BandChip
                label={setLocale(data.bands[0].name, router)}
                size="small"
              />
            )}
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
      {children}
    </ListItem>
  );
};

export default ArtistListItem;
