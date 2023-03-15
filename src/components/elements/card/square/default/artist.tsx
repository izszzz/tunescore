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
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {setLocale(data.name, router)}
            </Typography>
            <Box display="flex" alignItems="center">
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={isNonEmpty(data.bookmarks)}
              />
            </Box>
          </Box>
          {isNonEmpty(data.bands) && (
            <Chip
              label={setLocale(data.bands[0].name, router)}
              icon={<Person />}
            />
          )}
        </>
      }
      image={getImage(data.link?.streaming, 200, { square: true })}
      onClick={() =>
        router.push({ pathname: "/artists/[id]", query: { id: data.id } })
      }
    />
  );
};

export default ArtistDefaultSquareCard;
