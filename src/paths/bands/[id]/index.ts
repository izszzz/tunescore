import { Prisma } from "@prisma/client";

import { artistListArgs } from "../../../helpers/artist";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const bandShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.BandFindUniqueArgs>()({
    where: { id: getRouterId(router) },
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
