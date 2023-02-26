import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import type { BandListArgsType } from "../../../../helpers/band";
import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import BookmarkChip from "../../chip/bookmark";

import SquareCard from ".";

interface SquareBandCardProps {
  data: Prisma.BandGetPayload<BandListArgsType>;
}
const SquareBandCard = ({ data }: SquareBandCardProps) => {
  const router = useRouter();
  return (
    <SquareCard
      resource="BAND"
      size="200px"
      title={
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" noWrap>
            {setLocale(data.name, router)}
          </Typography>
          <Box display="flex" alignItems="center">
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={isNonEmpty(data.bookmarks)}
            />
          </Box>
        </Box>
      }
      image={getImage(data.link?.streaming, 200, { square: true })}
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
    />
  );
};

export default SquareBandCard;
