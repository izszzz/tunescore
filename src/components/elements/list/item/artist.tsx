import React from "react";

import Person from "@mui/icons-material/Person";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ResourceArtistListArgsType } from "../../../../helpers/artist";
import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import BandChip from "../../chip/band";
import BookmarkChip from "../../chip/bookmark";
import Image from "../../image";

import ListItem from ".";

export interface ArtistListItemProps extends ListItemProps {
  data: Prisma.ResourceGetPayload<ResourceArtistListArgsType>;
}
const ArtistListItem = ({ data, children }: ArtistListItemProps) => {
  const router = useRouter(),
    image = getImage(data.links, 60),
    name = setLocale(data.name, router);
  return (
    <ListItem
      icon={<Person />}
      listItemTextProps={{
        primary: name,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            {data.artist && isNonEmpty(data.artist.bands) && (
              <BandChip
                label={setLocale(data.artist.bands[0].resource.name, router)}
                size="small"
              />
            )}
            <BookmarkChip
              bookmarked={isNonEmpty(data.bookmarks)}
              label={data._count.bookmarks}
              size="small"
            />
          </Stack>
        ),
      }}
      route={{ pathname: "/artists/[id]", query: { id: data.id } }}
    >
      {image && (
        <Image alt={name} height="60" src={image} style={{ borderRadius: 3 }} />
      )}
      {children}
    </ListItem>
  );
};

export default ArtistListItem;
