import { Prisma } from "@prisma/client";

import { bookmarkArgs } from "./bookmark";
import type { SessionArg } from "./user";

export type BandListArgsType = ReturnType<typeof bandListArgs>;
export const bandListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.BandArgs>()({
    include: {
      bookmarks: bookmarkArgs({ type: "Band", session }),
      _count: {
        select: {
          bookmarks: true,
          artists: true,
          musics: true,
          albums: true,
        },
      },
    },
  });
