import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { artistListArgs } from "../../../helpers/artist";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export const bandShowQuery = ({
  router: {
    query: { id },
  },
  session,
}: {
  router: NextRouter<"/bands/[id]">;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.BandFindUniqueArgs>()({
    where: { id },
    ...bandShowArgs(session),
  });

export type BandShowArgsType = ReturnType<typeof bandShowArgs>;
const bandShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.BandArgs>()({
    include: {
      artists: artistListArgs(session),
      musics: musicListArgs(session),
      bookmarks: bookmarkArgs({ type: "Band", session }),
      tagMaps: { include: { tag: true } },
    },
  });
