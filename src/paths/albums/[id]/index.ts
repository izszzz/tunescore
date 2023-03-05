import { Prisma } from "@prisma/client";

import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const albumShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.AlbumFindUniqueArgs>()({
    where: { id: getRouterId(router) },
    ...albumShowArgs(session),
  });

export type AlbumShowArgsType = ReturnType<typeof albumShowArgs>;
const albumShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.AlbumArgs>()({
    include: {
      musics: musicListArgs(session),
      band: bandListArgs(session),
      artists: artistListArgs(session),
      bookmarks: bookmarkArgs({ type: "Album", session }),
      tagMaps: { include: { tag: true } },
    },
  });
