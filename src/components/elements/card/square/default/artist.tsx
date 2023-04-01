import React from "react";

import Person from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ResourceArtistListArgsType } from "../../../../../helpers/artist";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import ArtistSquareCard from "../artist";

interface DefaultArtistSquareCardProps {
  data: Prisma.ResourceGetPayload<ResourceArtistListArgsType>;
}
const ArtistDefaultSquareCard = ({ data }: DefaultArtistSquareCardProps) => {
  const router = useRouter(),
    { id, links, name, bookmarks, artist, _count } = data;
  return (
    <ArtistSquareCard
      image={getImage(links, 200, { square: true })}
      onClick={() => router.push({ pathname: "/artists/[id]", query: { id } })}
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography noWrap variant="h6">
              {setLocale(name, router)}
            </Typography>
            <Box alignItems="center" display="flex">
              <BookmarkChip
                bookmarked={isNonEmpty(bookmarks)}
                label={_count.bookmarks}
                size="small"
              />
            </Box>
          </Box>
          {artist && isNonEmpty(artist.bands) && (
            <Chip
              icon={<Person />}
              label={setLocale(artist.bands[0].resource.name, router)}
            />
          )}
        </>
      }
    />
  );
};

export default ArtistDefaultSquareCard;
