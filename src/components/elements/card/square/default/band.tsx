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
      size="200px"
      title={
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" noWrap>
            {setLocale(data.resource.name, router)}
          </Typography>
          <Box display="flex" alignItems="center">
            <BookmarkChip
              label={data.resource._count.bookmarks}
              size="small"
              bookmarked={isNonEmpty(data.resource.bookmarks)}
            />
          </Box>
        </Box>
      }
      image={getImage(data.resource.link?.streaming, 200, {
        square: true,
        channel: true,
      })}
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
    />
  );
};

export default BandDefaultSquareCard;
