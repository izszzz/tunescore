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
  data: Prisma.ResourceGetPayload<MusicListArgsType>;
}
const MusicDefaultSquareCard = ({ data }: MusicDefaultSquareCardProps) => {
  const router = useRouter(),
    { type, owner } = getMusicOwner(data?.music, router),
    { id, links, name, bookmarks, music, _count } = data;
  return (
    <MusicSquareCard
      image={getImage(
        [
          ...links.filter(({ type }) => type !== "Spotify"),
          ...(music?.albums[0]?.resource.links ?? []),
        ],
        200,
        { square: true }
      )}
      onClick={() => router.push({ pathname: "/musics/[id]", query: { id } })}
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

export default MusicDefaultSquareCard;
