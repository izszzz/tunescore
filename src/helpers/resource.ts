import { Prisma } from "@prisma/client";

import { resourceAlbumListArgs } from "./album";
import { resourceArtistListArgs } from "./artist";
import { resourceBandListArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import { resourceMusicListArgs } from "./music";
import type { SessionArg } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export const resourceListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        ...resourceMusicListArgs(session).include,
        ...resourceAlbumListArgs(session).include,
        ...resourceBandListArgs(session).include,
        ...resourceArtistListArgs(session).include,
        bookmarks: bookmarkArgs(session),
        _count: { select: { bookmarks: true } },
      },
    }),
  resourceArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        name: true,
        bookmarks: bookmarkArgs(session),
        links: true,
        tags: true,
        _count: { select: { bookmarks: true } },
      },
    });
