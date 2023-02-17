import React from "react";

import MusicNote from "@mui/icons-material/MusicNote";
import Chip from "@mui/material/Chip";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicOwner } from "../../../../helpers/music";
import type { MusicListArgsType } from "../../../../helpers/music";
import IndexChip from "../../chip";
import BookmarkChip from "../../chip/bookmark";
import Image from "../../image";

import ListItem from ".";

export interface MusicListItemProps extends ListItemProps {
  data: Prisma.MusicGetPayload<MusicListArgsType>;
}
const MusicListItem = ({ data, children, ...props }: MusicListItemProps) => {
  const router = useRouter();
  const title = setLocale(data.title, router);
  return (
    <ListItem
      {...props}
      route={{
        pathname: "/musics/[id]",
        query: { id: data.id },
      }}
      icon={<MusicNote />}
      listItemTextProps={{
        primary: title,
        secondary: (
          <Stack direction="row" spacing={1}>
            <Owner data={data} />
            <BookmarkChip
              label={data._count.bookmarks}
              size="small"
              bookmarked={!!data.bookmarks.length}
            />
            <Chip label={data.type} size="small" />
          </Stack>
        ),
      }}
    >
      {data.link?.streaming && (
        <Image
          height="60"
          alt={title}
          src={getImage(data.link.streaming, 60) || ""}
          style={{ borderRadius: 3 }}
        />
      )}
      {children}
    </ListItem>
  );
};

const Owner = ({ data }: Omit<MusicListItemProps, "children">) => {
  const router = useRouter();
  const { type, owner } = getMusicOwner(data, router);
  if (type === "NONE" || owner === null) return <></>;
  return <IndexChip resource={type} label={owner.name} size="small" />;
};

export default MusicListItem;
