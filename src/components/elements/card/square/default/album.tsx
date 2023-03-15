import React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getAlbumOwner } from "../../../../../helpers/album";
import type { AlbumListArgsType } from "../../../../../helpers/album";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import ResourceIcon from "../../../icon/resource";
import AlbumSquareCard from "../album";

interface AlbumDefaultSquareCardProps {
  data: Prisma.AlbumGetPayload<AlbumListArgsType>;
}
const AlbumDefaultSquareCard = ({ data }: AlbumDefaultSquareCardProps) => {
  const router = useRouter();
  const { type, owner } = getAlbumOwner(data, router);
  return (
    <AlbumSquareCard
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
                bookmarked={isNonEmpty(data.bookmarks)}
              />
            </Box>
          </Box>
          {owner && (
            <Chip label={owner.name} icon={<ResourceIcon type={type} />} />
          )}
        </>
      }
      image={getImage(data.link?.streaming, 200)}
      onClick={() =>
        router.push({ pathname: "/albums/[id]", query: { id: data.id } })
      }
    />
  );
};

export default AlbumDefaultSquareCard;
