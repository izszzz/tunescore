import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import { getMusicOwner } from "../../../../../helpers/music";
import type { userArgs } from "../../../../../helpers/user";
import IndexChip from "../../../chip";
import BookmarkChip from "../../../chip/bookmark";
import MusicSquareCard from "../music";

interface MusicDefaultSquareCardProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: typeof userArgs;
      band: true;
      albums: true;
      participations: {
        include: { artist: true; roleMap: { include: { role: true } } };
      };
      bookmarks: true;
      _count: { select: { bookmarks: true } };
    };
  }>;
}
const MusicDefaultSquareCard = ({ data }: MusicDefaultSquareCardProps) => {
  const router = useRouter(),
    { type, owner } = getMusicOwner(data, router),
    { id, title } = data;
  return (
    <MusicSquareCard
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {setLocale(title, router)}
            </Typography>
            <Box display="flex" alignItems="center">
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={isNonEmpty(data.bookmarks)}
              />
            </Box>
          </Box>
          {owner && <IndexChip label={owner.name} resource={type} />}
        </>
      }
      image={
        data.link?.streaming &&
        getImage(
          {
            ...data.link?.streaming,
            spotify:
              data.albums.find((album) => !!album.link?.streaming?.spotify)
                ?.link?.streaming?.spotify || null,
          },
          200,
          { square: true }
        )
      }
      onClick={() => router.push({ pathname: "/musics/[id]", query: { id } })}
    />
  );
};

export default MusicDefaultSquareCard;
