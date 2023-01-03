import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import type { Prisma } from "@prisma/client";
import Box from "@mui/material/Box";
import BookmarkChip from "../../chip/bookmark";
import BandChip from "../../chip/band";

export interface ArtistListItemProps {
  data: Prisma.ArtistGetPayload<{
    include: {
      bands: true;
      _count: {
        select: {
          bookmarks: true;
        };
      };
    };
  }>;
}
const ArtistListItem = ({ data }: ArtistListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/artists/[id]",
          query: { id: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="ARTIST" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" mr={3}>
              {setLocale(data.name, router)}
            </Typography>
          }
          secondary={
            <Box display="flex">
              {data.bands[0] && (
                <BandChip
                  label={setLocale(data.bands[0].name, router)}
                  size="small"
                />
              )}
              <BookmarkChip label={data._count.bookmarks} size="small" />
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ArtistListItem;
