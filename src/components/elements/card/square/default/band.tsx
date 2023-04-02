import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { ResourceBandListArgsType } from "../../../../../helpers/band";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import BandSquareCard from "../band";

interface BandDefaultSquareCardProps {
  data: Prisma.ResourceGetPayload<ResourceBandListArgsType>;
}
const BandDefaultSquareCard = ({ data }: BandDefaultSquareCardProps) => {
  const router = useRouter(),
    { id, links, name, bookmarks, _count } = data;
  return (
    <BandSquareCard
      image={getImage(links, 200, {
        square: true,
        channel: true,
      })}
      onClick={() => router.push({ pathname: "/bands/[id]", query: { id } })}
      size="200px"
      title={
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
      }
    />
  );
};

export default BandDefaultSquareCard;
