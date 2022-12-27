import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useRouter } from "next/router";
import setLocale from "../../../../helpers/setLocale";
import ResourceIcon from "../../icon/resource";
import type { Prisma } from "@prisma/client";
import Box from "@mui/material/Box";

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
          <ResourceIcon resource="artist" />
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
                <Typography mr={1}>
                  {`joined by ${setLocale(data.bands[0].name, router)}`}
                </Typography>
              )}
              <Box display="flex" alignItems="center">
                <BookmarkBorderIcon fontSize="small" />
                {data._count.bookmarks}
              </Box>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ArtistListItem;
