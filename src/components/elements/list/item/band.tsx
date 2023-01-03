import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useRouter } from "next/router";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import MusicChip from "../../chip/music";
import ArtistChip from "../../chip/artist";
import AlbumChip from "../../chip/album";
import BookmarkChip from "../../chip/bookmark";
import type { BandListQueryType } from "../../../../helpers/band";
import type { Prisma } from "@prisma/client";
export interface BandListItemProps {
  data: Prisma.BandGetPayload<BandListQueryType>;
}

const BandListItem = ({ data }: BandListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/bands/[id]", query: { id: data.id } })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="BAND" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" noWrap>
              {setLocale(data.name, router)}
            </Typography>
          }
          secondary={
            <Box component="span" display="flex" alignItems="center">
              <Typography
                component="span"
                mr={1}
                variant="body2"
                color="text.subprimary"
              >
                <MusicChip label={data._count.musics} size="small" />
                <AlbumChip label={data._count.albums} size="small" />
                <ArtistChip label={data._count.artists} size="small" />
                <BookmarkChip
                  label={data._count.bookmarks}
                  size="small"
                  bookmarked={!!data.bookmarks.length}
                />
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
export default BandListItem;
