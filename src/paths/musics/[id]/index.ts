import { Prisma } from "@prisma/client";

import { albumListArgs } from "../../../helpers/album";
import { bandListArgs } from "../../../helpers/band";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { participatedArtistArgs } from "../../../helpers/participation";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";
import { userWhere, userArgs } from "../../../helpers/user";

import { pullShowArgs } from "./pulls/[pullId]";

export type MusicShowQueryType = ReturnType<typeof musicShowQuery>;
export const musicShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.MusicFindUniqueArgs>()({
    where: { id: getRouterId(router) },
    ...musicShowArgs(session),
  });

export type MusicShowArgsType = ReturnType<typeof musicShowArgs>;
const musicShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.MusicArgs>()({
    include: {
      user: userArgs,
      band: bandListArgs(session),
      albums: albumListArgs(session),
      participations: participatedArtistArgs(session),
      pulls: {
        ...pullShowArgs(session),
        where: { status: "VOTE" as const },
        take: 3,
      },
      transactions: {
        where: { type: "PURCHASE" as const, user: userWhere(session) },
      },
      carts: { where: { user: userWhere(session) } },
      bookmarks: bookmarkArgs({ type: "Music", session }),
      tagMaps: { include: { tag: true } },
    },
  });
