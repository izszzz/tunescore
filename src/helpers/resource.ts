import { Prisma } from "@prisma/client";

import { albumListArgs } from "./album";
import { artistListArgs } from "./artist";
import { bandListArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import { musicListArgs } from "./music";
import type { SessionArg } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export const resourceListArgs = (session: SessionArg) => ({
    include: {
      name: true,
      music: musicListArgs(session),
      album: albumListArgs(session),
      band: bandListArgs(session),
      artist: artistListArgs(session),
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
        _count: { select: { bookmarks: true } },
      },
    });
