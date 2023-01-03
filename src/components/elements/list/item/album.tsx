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
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import StatusIcon from "../../icon/status";

export interface AlbumListItemProps {
  data: Prisma.AlbumGetPayload<{
    include: {
      band: true;
      _count: { select: { bookmarks: true; artists: true; musics: true } };
    };
  }>;
}
const AlbumListItem = ({ data }: AlbumListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({
          pathname: "/albums/[id]",
          query: { id: data.id },
        })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <StatusIcon resource="OPEN" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" mr={3}>
              {setLocale(data.title, router)}
            </Typography>
          }
          secondary={
            <>
              <BookmarkChip label={data._count.bookmarks} size="small" />
              <MusicChip label={data._count.musics} size="small" />
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AlbumListItem;
