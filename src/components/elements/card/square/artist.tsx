import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ArtistListArgsType } from "../../../../helpers/artist";
import { getChannelImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import BookmarkChip from "../../chip/bookmark";

import SquareCard from ".";

interface SquareArtistCardProps {
  data: Prisma.ArtistGetPayload<ArtistListArgsType>;
}
const SquareArtistCard = ({ data }: SquareArtistCardProps) => {
  const router = useRouter();
  return (
    <SquareCard
      resource="ARTIST"
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
            <IndexChip
              label={setLocale(data.bands[0].name, router)}
              resource="BAND"
            />
          )}
        </>
      }
      image={
        data.link?.streaming
          ? getChannelImage(data.link.streaming)?.image?.size?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/artists/[id]", query: { id: data.id } })
      }
    />
  );
};

export default SquareArtistCard;
