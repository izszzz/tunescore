import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ListItemIcon from "@mui/material/ListItemIcon";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import setLocale from "../../../../helpers/setLocale";
import ResourceIcon from "../../icon/resource";
import { getOwner } from "../../../../helpers/music";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import type { Prisma } from "@prisma/client";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
      artists: true;
      bookmarks: true;
      _count: {
        select: {
          bookmarks: true;
        };
      };
    };
  }>;
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
          <ResourceIcon resource="music" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box component="span" display="flex" alignItems="center">
              <Typography variant="h6" mr={3}>
                {setLocale(data.title, router)}
              </Typography>
              <Chip component="span" label={data.type} size="small" />
            </Box>
          }
          secondary={
            <Box display="flex" alignItems="center">
              <Owner data={data} />
              <Box display="flex" alignItems="center">
                <BookmarkBorderIcon fontSize="small" />
                {data._count.bookmarks}
              </Box>
            </Box>
          }
        />
        {data.link?.streaming && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width="60"
            height="60"
            alt={setLocale(data.title, router) || ""}
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
  if (type === "none" || owner === null) return <></>;
  return (
    <Box component="span" display="flex" alignItems="center">
      <ResourceIcon resource={type} />
      <Typography
        mr={1}
        variant="body2"
        color="text.subprimary"
        component="span"
      >
        {owner.name}
      </Typography>
    </Box>
  );
};

export default MusicListItem;
