import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import { getContentImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicOwner } from "../../../../helpers/music";
import IndexChip from "../../chip";
import BookmarkChip from "../../chip/bookmark";

import SquareCard from ".";

interface SquareMusicCardProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      band: true;
      participations: {
        include: { artist: true; roleMap: { include: { role: true } } };
      };
      bookmarks: true;
      _count: {
        select: {
          bookmarks: true;
        };
      };
    };
  }>;
}
const SquareMusicCard = ({ data }: SquareMusicCardProps) => {
  const router = useRouter();
  const { type, owner } = getMusicOwner(data, router);
  return (
    <SquareCard
      resource="MUSIC"
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
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    />
  );
};

export default SquareMusicCard;
