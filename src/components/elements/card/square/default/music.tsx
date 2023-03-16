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
    {
      id,
      resource: { name },
    } = data;
  return (
    <MusicSquareCard
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {setLocale(name, router)}
            </Typography>
            <Box display="flex" alignItems="center">
              <BookmarkChip
                label={data.resource._count.bookmarks}
                size="small"
                bookmarked={isNonEmpty(data.resource.bookmarks)}
              />
            </Box>
          </Box>
          {owner && (
            <Chip label={owner.name} icon={<ResourceIcon type={type} />} />
          )}
        </>
      }
      image={
        data.resource.link?.streaming &&
        getImage(
          {
            ...data.resource.link?.streaming,
            spotify:
              data.albums.find(
                (album) => !!album.resource.link?.streaming?.spotify
              )?.resource.link?.streaming?.spotify || null,
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
