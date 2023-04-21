import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicLinks } from "../../../../helpers/music";
import {
  getResourceShowPathname,
  getOwner,
} from "../../../../helpers/resource";
import BookmarkChip from "../../chip/bookmark";
import ResourceIcon from "../../icon/resource";
import { NextLinkComposed } from "../../link";
import type { ResourceListItemProps } from "../../list/item/resource";
import EllipsisTypography from "../../typography/ellipsis";

import SquareCard from ".";

interface ResourceSquareCardProps {
  data: ResourceListItemProps["data"];
}
const ResourceSquareCard = ({ data }: ResourceSquareCardProps) => {
  const router = useRouter(),
    { id, unionType, name, bookmarks, _count } = data,
    { type, owner } = getOwner(data, router),
    locale = setLocale(name, router),
    image = getImage(getMusicLinks(data), 200, {
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
      title={
        <>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <EllipsisTypography variant="h6">{locale}</EllipsisTypography>
            <Box alignItems="center" display="flex">
              <BookmarkChip
                bookmarked={isNonEmpty(bookmarks)}
                label={_count.bookmarks}
                size="small"
              />
            </Box>
          </Box>
          {owner && (
            <Chip
              clickable
              component={NextLinkComposed}
              icon={<ResourceIcon type={type} />}
              label={owner.name}
              size="small"
              to={{
                pathname: getResourceShowPathname(type),
                query: { id: owner.id },
              }}
            />
          )}
        </>
      }
      to={{
        pathname: getResourceShowPathname(unionType),
        query: { id },
      }}
    />
  );
};
export default ResourceSquareCard;
