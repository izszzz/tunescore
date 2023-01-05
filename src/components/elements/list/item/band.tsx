import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import MusicChip from "../../chip/music";
import ArtistChip from "../../chip/artist";
import AlbumChip from "../../chip/album";
import BookmarkChip from "../../chip/bookmark";
import { getContentImage } from "../../../../helpers/image";
import type { BandListQueryType } from "../../../../helpers/band";
import type { Prisma } from "@prisma/client";
export interface BandListItemProps {
  data: Prisma.BandGetPayload<BandListQueryType>;
}

const BandListItem = ({ data }: BandListItemProps) => {
  const router = useRouter();
  const name = setLocale(data.name, router);
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
              {name}
            </Typography>
          }
          secondary={
            <Stack direction="row" spacing={1}>
              <MusicChip label={data._count.musics} size="small" />
              <AlbumChip label={data._count.albums} size="small" />
              <ArtistChip label={data._count.artists} size="small" />
              <BookmarkChip
                label={data._count.bookmarks}
                size="small"
                bookmarked={!!data.bookmarks.length}
              />
            </Stack>
          }
        />
        {data.link?.streaming && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            height="60"
            alt={name}
            src={
              getContentImage(data.link.streaming)?.image?.size?.medium || ""
            }
            style={{ borderRadius: 3 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};
export default BandListItem;
