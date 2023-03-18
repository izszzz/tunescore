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
    name = setLocale(data.resource.name, router);
  return (
    <ListItem
      icon={<Person />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            {isNonEmpty(data.bands) && (
              <BandChip
                label={setLocale(data.bands[0].resource.name, router)}
                size="small"
              />
            )}
            <BookmarkChip
              bookmarked={isNonEmpty(data.resource.bookmarks)}
              label={data.resource._count.bookmarks}
              size="small"
            />
          </Stack>
        ),
      }}
      route={{ pathname: "/artists/[id]", query: { id: data.id } }}
    >
      {data.resource.link?.streaming && (
        <Image
          alt={name}
          height="60"
          src={getImage(data.resource.link.streaming, 60) || undefined}
          style={{ borderRadius: 3 }}
        />
      )}
      {children}
    </ListItem>
  );
};

export default ArtistListItem;
