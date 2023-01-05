import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getAlbumOwner } from "../../../../helpers/album";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import BookmarkChip from "../../chip/bookmark";
import SquareAlbumCard from "./square";
import type { AlbumListQueryType } from "../../../../helpers/album";
import type { Prisma } from "@prisma/client";

interface AlbumCard {
  data: Prisma.AlbumGetPayload<AlbumListQueryType>;
}
const AlbumCard = ({ data }: AlbumCard) => {
  const router = useRouter();
  const { type, owner } = getAlbumOwner(data, router);
  return (
    <SquareAlbumCard
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {setLocale(data.title, router)}
            </Typography>
            <Box display="flex" alignItems="center">
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={!!data.bookmarks.length}
              />
            </Box>
          </Box>
          {owner && <IndexChip label={owner.name} resource={type} />}
        </>
      }
      image={
        data.link?.streaming
          ? selectSuitableStreamingImage(data.link.streaming)?.image?.size
              ?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/albums/[id]", query: { id: data.id } })
      }
    />
  );
};

export default AlbumCard;
