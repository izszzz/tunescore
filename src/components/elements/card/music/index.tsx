import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getMusicOwner } from "../../../../helpers/music";
import setLocale from "../../../../helpers/locale";
import IndexChip from "../../chip";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import BookmarkChip from "../../chip/bookmark";
import SquareMusicCard from "./square";
import type { Prisma } from "@prisma/client";

interface MusicCard {
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
const MusicCard = ({ data }: MusicCard) => {
  const router = useRouter();
  const { type, owner } = getMusicOwner(data, router);
  return (
    <SquareMusicCard
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
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    />
  );
};

export default MusicCard;
