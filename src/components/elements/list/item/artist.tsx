import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import ResourceIcon from "../../icon/resource";
import setLocale from "../../../../helpers/locale";
import BookmarkChip from "../../chip/bookmark";
import BandChip from "../../chip/band";
import { getChannelImage } from "../../../../helpers/image";
import Image from "../../image";
import type { Prisma } from "@prisma/client";
import type { ArtistListArgsType } from "../../../../helpers/artist";

export interface ArtistListItemProps {
  data: Prisma.ArtistGetPayload<ArtistListArgsType>;
}
const ArtistListItem = ({ data }: ArtistListItemProps) => {
  const router = useRouter();
  const name = setLocale(data.name, router);
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
              {name}
            </Typography>
          }
          secondary={
            <Stack direction="row" spacing={1}>
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
            </Stack>
          }
        />
        {data.link?.streaming && (
          <Image
            height="60"
            alt={name}
            src={
              getChannelImage(data.link.streaming)?.image?.size?.medium || ""
            }
            style={{ borderRadius: 3 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default ArtistListItem;
