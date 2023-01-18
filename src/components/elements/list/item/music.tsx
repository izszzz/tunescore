import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import setLocale from "../../../../helpers/locale";
import ResourceIcon from "../../icon/resource";
import { getMusicOwner } from "../../../../helpers/music";
import BookmarkChip from "../../chip/bookmark";
import IndexChip from "../../chip";
import { getContentImage } from "../../../../helpers/image";
import Image from "../../image";
import type { MusicListArgsType } from "../../../../helpers/music";
import type { Prisma } from "@prisma/client";
import ListItem from ".";

export interface MusicListItemProps {
  data: Prisma.MusicGetPayload<MusicListArgsType>;
}
const MusicListItem = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const title = setLocale(data.title, router);
  return (
    <ListItem
      route={{
        pathname: "/musics/[id]",
        query: { id: data.id },
      }}
      icon={<ResourceIcon resource="BAND" />}
      listItemTextProps={{
        primary: (
          <Box component="span" display="flex" alignItems="center">
            <Typography variant="h6" mr={3} noWrap>
              {title}
            </Typography>
            <Chip component="span" label={data.type} size="small" />
          </Box>
        ),
        secondary: (
          <Stack direction="row" spacing={1}>
            <Owner data={data} />
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={!!data.bookmarks.length}
            />
          </Stack>
        ),
      }}
    >
      {data.link?.streaming && (
        <Image
          height="60"
          alt={title}
          src={getContentImage(data.link.streaming)?.image?.size?.medium || ""}
          style={{ borderRadius: 3 }}
        />
      )}
    </ListItem>
  );
};

const Owner = ({ data }: MusicListItemProps) => {
  const router = useRouter();
  const { type, owner } = getMusicOwner(data, router);
  if (type === "NONE" || owner === null) return <></>;
  return <IndexChip resource={type} label={owner.name} size="small" />;
};

export default MusicListItem;
