import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicLinks } from "../../../../helpers/music";
import type { ResourceListArgsType } from "../../../../helpers/resource";
import {
  getResourceShowPathname,
  getOwner,
} from "../../../../helpers/resource";
import BookmarkChip from "../../chip/bookmark";
import ResourceIcon from "../../icon/resource";

import SquareCard from ".";

interface ResourceSquareCardProps {
  data: Prisma.ResourceGetPayload<ResourceListArgsType>;
}
const ResourceSquareCard = ({ data }: ResourceSquareCardProps) => {
  const router = useRouter(),
    { id, links, unionType, name, bookmarks, _count } = data,
    { type, owner } = getOwner(data, router),
    image = getImage(unionType === "Music" ? getMusicLinks(data) : links, 200, {
      square: true,
    });
  return (
    <SquareCard
      icon={
        <ResourceIcon
          sx={{ fontSize: "60px", color: "grey" }}
          type={unionType}
        />
      }
      image={image}
      onClick={() =>
        router.push({
          pathname: getResourceShowPathname(unionType),
          query: { id },
        })
      }
      size="200px"
      title={
        <>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
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
export default ResourceSquareCard;
