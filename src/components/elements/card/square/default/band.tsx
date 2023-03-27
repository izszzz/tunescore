import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { BandListArgsType } from "../../../../../helpers/band";
import { getImage } from "../../../../../helpers/image";
import setLocale from "../../../../../helpers/locale";
import BookmarkChip from "../../../chip/bookmark";
import BandSquareCard from "../band";

interface BandDefaultSquareCardProps {
  data: Prisma.BandGetPayload<BandListArgsType>;
}
const BandDefaultSquareCard = ({ data }: BandDefaultSquareCardProps) => {
  const router = useRouter();
  return (
    <BandSquareCard
      image={getImage(data.resource.links, 200, {
        square: true,
        channel: true,
      })}
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
      size="200px"
      title={
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
      }
    />
  );
};

export default BandDefaultSquareCard;
