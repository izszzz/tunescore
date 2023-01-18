import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import { getAlbumOwner } from "../../../../helpers/album";
import type { AlbumListArgsType } from "../../../../helpers/album";
import { getContentImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import BookmarkChip from "../../chip/bookmark";

import SquareCard from ".";



interface SquareAlbumCardProps {
  data: Prisma.AlbumGetPayload<AlbumListArgsType>;
}
const SquareAlbumCard = ({ data }: SquareAlbumCardProps) => {
  const router = useRouter();
  const { type, owner } = getAlbumOwner(data, router);
  return (
    <SquareCard
      resource="ALBUM"
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
          ? getContentImage(data.link.streaming)?.image?.size?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/albums/[id]", query: { id: data.id } })
      }
    />
  );
};

export default SquareAlbumCard;
