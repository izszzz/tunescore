import React from "react";
import { useRouter } from "next/router";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import { getOwner } from "../../../../helpers/music";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import BookmarkChip from "../../chip/bookmark";
import IndexChip from "../../chip";
import type { MusicListQueryType } from "../../../../helpers/music";
import type { Prisma } from "@prisma/client";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<MusicListQueryType>;
}
const MusicListItem = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      onClick={() =>
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <ResourceIcon resource="MUSIC" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box component="span" display="flex" alignItems="center">
              <Typography variant="h6" mr={3} noWrap>
                {setLocale(data.title, router)}
              </Typography>
              <Chip component="span" label={data.type} size="small" />
            </Box>
          }
          secondary={
            <Stack direction="row" spacing={1}>
              <Owner data={data} />
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
            alt={setLocale(data.title, router)}
            src={
              selectSuitableStreamingImage(data.link.streaming)?.image?.size
                ?.medium || ""
            }
            style={{ borderRadius: 3 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

const Owner = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const { type, owner } = getOwner(data, router);
  if (type === "NONE" || owner === null) return <></>;
  return <IndexChip resource={type} label={owner.name} size="small" />;
};

export default MusicListItem;
