import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import BookmarkChip from "../../chip/bookmark";
import { getChannelImage } from "../../../../helpers/image";
import SquareCard from ".";
import type { ArtistListQueryType } from "../../../../helpers/artist";
import type { Prisma } from "@prisma/client";

interface SquareArtistCardProps {
  data: Prisma.ArtistGetPayload<ArtistListQueryType>;
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
