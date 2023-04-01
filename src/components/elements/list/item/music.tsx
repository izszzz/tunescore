import React from "react";

import MusicNote from "@mui/icons-material/MusicNote";
import Chip from "@mui/material/Chip";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";

import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicOwner } from "../../../../helpers/music";
import type { ResourceMusicListArgsType } from "../../../../helpers/music";
import BookmarkChip from "../../chip/bookmark";
import ResourceIcon from "../../icon/resource";
import Image from "../../image";

import ListItem from ".";

export interface MusicListItemProps extends ListItemProps {
  data: Prisma.ResourceGetPayload<ResourceMusicListArgsType>;
}
const MusicListItem = ({ data, children, ...props }: MusicListItemProps) => {
  const router = useRouter(),
    title = setLocale(data.name, router),
    image = getImage(
      [
        ...data.links.filter(({ type }) => type !== "Spotify"),
        ...(data.music?.albums[0]?.resource.links ?? []),
      ],
      60
    );
  return (
    <ListItem
      {...props}
      icon={<MusicNote />}
      listItemTextProps={{
        primary: title,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            <Owner data={data} />
            <BookmarkChip
              bookmarked={isNonEmpty(data.bookmarks)}
              label={data._count.bookmarks}
              size="small"
            />
            <Chip component="span" label={data.music?.type} size="small" />
          </Stack>
        ),
      }}
      route={{ pathname: "/musics/[id]", query: { id: data.id } }}
    >
      {image && (
        <Image
          alt={title}
          height="60"
          src={image}
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
  return (
    <Chip icon={<ResourceIcon type={type} />} label={owner.name} size="small" />
  );
};

export default MusicListItem;
