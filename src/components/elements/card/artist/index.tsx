import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import BookmarkChip from "../../chip/bookmark";
import SquareArtistCard from "./square";
import type { ArtistListQueryType } from "../../../../helpers/artist";
import type { Prisma } from "@prisma/client";

interface ArtistCardProps {
  data: Prisma.ArtistGetPayload<ArtistListQueryType>;
}
const ArtistCard = ({ data }: ArtistCardProps) => {
  const router = useRouter();
  return (
    <SquareArtistCard
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
                bookmarked={!!data.bookmarks.length}
              />
            </Box>
          </Box>
          {data.bands[0] && (
            <IndexChip
              label={setLocale(data.bands[0].name, router)}
              resource="BAND"
            />
          )}
        </>
      }
      image={
        data.link?.streaming
          ? selectSuitableStreamingImage(data.link.streaming)?.image?.size
              ?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/artists/[id]", query: { id: data.id } })
      }
    />
  );
};

export default ArtistCard;
