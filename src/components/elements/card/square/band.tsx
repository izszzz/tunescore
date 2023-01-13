import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import setLocale from "../../../../helpers/locale";
import BookmarkChip from "../../chip/bookmark";
import { getChannelImage } from "../../../../helpers/image";
import SquareCard from ".";
import type { BandListArgsType } from "../../../../helpers/band";
import type { Prisma } from "@prisma/client";

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
              bookmarked={!!data.bookmarks.length}
            />
          </Box>
        </Box>
      }
      image={
        data.link?.streaming
          ? getChannelImage(data.link.streaming)?.image?.size?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
    />
  );
};

export default SquareBandCard;
