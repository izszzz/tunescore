import React from "react";

import Person from "@mui/icons-material/Person";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ArtistListArgsType } from "../../../../helpers/artist";
import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import BandChip from "../../chip/band";
import BookmarkChip from "../../chip/bookmark";
import Image from "../../image";

import ListItem from ".";

export interface ArtistListItemProps extends ListItemProps {
  data: Prisma.ArtistGetPayload<ArtistListArgsType>;
}
const ArtistListItem = ({ data, children }: ArtistListItemProps) => {
  const router = useRouter(),
    name = setLocale(data.name, router);
  return (
    <ListItem
      route={{
        pathname: "/artists/[id]",
        query: { id: data.id },
      }}
      icon={<Person />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack direction="row" spacing={1} component="span">
            {isNonEmpty(data.bands) && (
              <BandChip
                label={setLocale(data.bands[0].name, router)}
                size="small"
              />
            )}
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={isNonEmpty(data.bookmarks)}
            />
          </Stack>
        ),
      }}
    >
      {data.link?.streaming && (
        <Image
          height="60"
          alt={name}
          src={getImage(data.link.streaming, 60) || undefined}
          style={{ borderRadius: 3 }}
        />
      )}
      {children}
    </ListItem>
  );
};

export default ArtistListItem;
