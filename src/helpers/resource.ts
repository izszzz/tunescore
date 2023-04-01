import { Prisma } from "@prisma/client";

import { albumArgs } from "./album";
import { artistArgs } from "./artist";
import { bandArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import { musicArgs } from "./music";
import type { SessionArg } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export type ResourceArgsType = ReturnType<typeof resourceArgs>;
export const resourceListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        music: musicArgs(session),
        album: albumArgs,
        band: bandArgs,
        artist: artistArgs,
        ...resourceArgs(session).include,
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
