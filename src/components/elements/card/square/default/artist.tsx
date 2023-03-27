import React from "react";

import Person from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ArtistListArgsType } from "../../../../../helpers/artist";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import ArtistSquareCard from "../artist";

interface DefaultArtistSquareCardProps {
  data: Prisma.ArtistGetPayload<ArtistListArgsType>;
}
const ArtistDefaultSquareCard = ({ data }: DefaultArtistSquareCardProps) => {
  const router = useRouter();
  return (
    <ArtistSquareCard
      image={getImage(data.resource.links, 200, { square: true })}
      onClick={() =>
        router.push({ pathname: "/artists/[id]", query: { id: data.id } })
      }
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography noWrap variant="h6">
              {setLocale(data.resource.name, router)}
            </Typography>
            <Box alignItems="center" display="flex">
              <BookmarkChip
                bookmarked={isNonEmpty(data.resource.bookmarks)}
                label={data.resource._count.bookmarks}
                size="small"
              />
            </Box>
          </Box>
          {isNonEmpty(data.bands) && (
            <Chip
              icon={<Person />}
              label={setLocale(data.bands[0].resource.name, router)}
            />
          )}
        </>
      }
    />
  );
};

export default ArtistDefaultSquareCard;
