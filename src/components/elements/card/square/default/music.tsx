import React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import type { MusicListArgsType } from "../../../../../helpers/music";
import { getMusicOwner } from "../../../../../helpers/music";
import BookmarkChip from "../../../chip/bookmark";
import ResourceIcon from "../../../icon/resource";
import MusicSquareCard from "../music";

interface MusicDefaultSquareCardProps {
  data: Prisma.MusicGetPayload<MusicListArgsType>;
}
const MusicDefaultSquareCard = ({ data }: MusicDefaultSquareCardProps) => {
  const router = useRouter(),
    { type, owner } = getMusicOwner(data, router),
    { id } = data;
  return (
    <MusicSquareCard
      image={
        data.resource.link?.streaming &&
        getImage(
          {
            ...data.resource.link?.streaming,
            spotify: data.albums[0]?.resource.link?.streaming?.spotify || null,
          },
          200,
          { square: true }
        )
      }
      onClick={() => router.push({ pathname: "/musics/[id]", query: { id } })}
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
          {owner && (
            <Chip icon={<ResourceIcon type={type} />} label={owner.name} />
          )}
        </>
      }
    />
  );
};

export default MusicDefaultSquareCard;
