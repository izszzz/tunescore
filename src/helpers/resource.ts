import { albumListArgs } from "./album";
import { artistListArgs } from "./artist";
import { bandListArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import { musicListArgs } from "./music";
import type { SessionArg } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export const resourceListArgs = (session: SessionArg) => ({
    include: {
      music: musicListArgs(session),
      album: albumListArgs(session),
      band: bandListArgs(session),
      artist: artistListArgs(session),
      bookmarks: bookmarkArgs(session),
      _count: { select: { bookmarks: true } },
    },
  }),
  resourceArgs = (session: SessionArg) => ({
    include: {
      bookmarks: bookmarkArgs(session),
      _count: { select: { bookmarks: true } },
    },
  });
