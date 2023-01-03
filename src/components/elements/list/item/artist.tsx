import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import ResourceIcon from "../../icon/resource";
import setLocale from "../../../../helpers/locale";
import BookmarkChip from "../../chip/bookmark";
import BandChip from "../../chip/band";
import type { Prisma } from "@prisma/client";
import type { ArtistListQueryType } from "../../../../helpers/artist";

export interface ArtistListItemProps {
  data: Prisma.ArtistGetPayload<ArtistListQueryType>;
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
            <Typography variant="h6" noWrap>
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
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={!!data.bookmarks.length}
              />
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ArtistListItem;
