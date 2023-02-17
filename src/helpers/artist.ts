import { Prisma } from "@prisma/client";

import { bookmarkArgs } from "./bookmark";
import type { SessionArg } from "./user";

export type ArtistListArgsType = ReturnType<typeof artistListArgs>;
export const artistListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: true,
      bookmarks: bookmarkArgs({ type: "Artist", session }),
      _count: {
        select: {
          bookmarks: true,
        },
      },
    },
  });
