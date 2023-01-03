import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import type { AlbumListQueryType } from "../../../../helpers/album";
import type { Prisma } from "@prisma/client";

export interface AlbumListItemProps {
  data: Prisma.AlbumGetPayload<AlbumListQueryType>;
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
          <ResourceIcon resource="ALBUM" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6" noWrap>
              {setLocale(data.title, router)}
            </Typography>
          }
          secondary={
            <>
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={!!data.bookmarks.length}
              />
              <MusicChip label={data._count.musics} size="small" />
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AlbumListItem;
