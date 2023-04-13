import Chip from "@mui/material/Chip";
import type { ListItemProps } from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { P, match } from "ts-pattern";
import type { Optional } from "utility-types";

import { getImage } from "../../../../helpers/image";
import setLocale from "../../../../helpers/locale";
import { getMusicLinks } from "../../../../helpers/music";
import type { ResourceListArgsType } from "../../../../helpers/resource";
import {
  getResourceShowPathname,
  getOwner,
} from "../../../../helpers/resource";
import AlbumChip from "../../chip/album";
import ArtistChip from "../../chip/artist";
import BandChip from "../../chip/band";
import BookmarkChip from "../../chip/bookmark";
import MusicChip from "../../chip/music";
import ResourceIcon from "../../icon/resource";
import Image from "../../image";

import ListItem from ".";
export interface ResourceListItemProps extends ListItemProps {
  data: Optional<
    Prisma.ResourceGetPayload<ResourceListArgsType>,
    "music" | "album" | "band" | "artist"
  >;
}
const ResourceListItem = ({ data, children }: ResourceListItemProps) => {
  const router = useRouter(),
    { id, unionType, name, bookmarks, _count } = data,
    locale = setLocale(name, router),
    image = getImage(getMusicLinks(data), 60),
    { type, owner } = getOwner(data, router);
  return (
    <ListItem
      icon={<ResourceIcon type={unionType} />}
      listItemTextProps={{
        primary: locale,
        secondary: (
          <Stack component="span" direction="row" spacing={1}>
            {type !== "NONE" && (
              <Chip
                icon={<ResourceIcon type={type} />}
                label={owner.name}
                size="small"
              />
            )}
            <BookmarkChip
              bookmarked={isNonEmpty(bookmarks)}
              label={_count.bookmarks}
              size="small"
            />
            {match(data)
              .with({ music: P.select(P.not(P.nullish)) }, (data) => (
                <Chip component="span" label={data.type} size="small" />
              ))
              .with({ artist: P.select(P.not(P.nullish)) }, (data) =>
                isNonEmpty(data.bands) ? (
                  <BandChip
                    label={setLocale(data.bands[0].resource.name, router)}
                    size="small"
                  />
                ) : (
                  <></>
                )
              )
              .with({ album: P.select(P.not(P.nullish)) }, (data) => (
                <>
                  <MusicChip label={data._count.musics} size="small" />
                  <ArtistChip label={data._count.artists} size="small" />
                </>
              ))
              .with({ band: P.select(P.not(P.nullish)) }, (data) => (
                <>
                  <MusicChip label={data._count.musics} size="small" />
                  <AlbumChip label={data._count.albums} size="small" />
                  <ArtistChip label={data._count.artists} size="small" />
                </>
              ))
              .otherwise(() => (
                <></>
              ))}
          </Stack>
        ),
      }}
      to={{
        pathname: getResourceShowPathname(unionType),
        query: { id },
      }}
    >
      {image && (
        <Image
          alt={locale}
          height="60"
          src={image ?? ""}
          style={{ borderRadius: 3 }}
        />
      )}
      {children}
    </ListItem>
  );
};

export default ResourceListItem;
