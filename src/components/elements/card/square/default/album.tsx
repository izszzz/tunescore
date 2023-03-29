import React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getAlbumOwner } from "../../../../../helpers/album";
import type { ResourceAlbumListArgsType } from "../../../../../helpers/album";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import ResourceIcon from "../../../icon/resource";
import AlbumSquareCard from "../album";

interface AlbumDefaultSquareCardProps {
  data: Prisma.ResourceGetPayload<ResourceAlbumListArgsType>;
}
const AlbumDefaultSquareCard = ({ data }: AlbumDefaultSquareCardProps) => {
  const router = useRouter(),
    { type, owner } = getAlbumOwner(data, router),
    { id, links, name, bookmarks, _count } = data;
  return (
    <AlbumSquareCard
      image={getImage(links, 200)}
      onClick={() => router.push({ pathname: "/albums/[id]", query: { id } })}
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
          {owner && (
            <Chip icon={<ResourceIcon type={type} />} label={owner.name} />
          )}
        </>
      }
    />
  );
};

export default AlbumDefaultSquareCard;
