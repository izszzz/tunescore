import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { albumListArgs } from "../../../helpers/album";
import { bandListArgs } from "../../../helpers/band";
import { participatedArtistArgs } from "../../../helpers/participation";
import { resourceArgs } from "../../../helpers/resource";
import type { SessionArg } from "../../../helpers/user";
import { userWhere, userArgs } from "../../../helpers/user";

import { pullShowArgs } from "./pulls/[pullId]";

export type MusicShowQueryType = ReturnType<typeof musicShowQuery>;
export type MusicShowArgsType = ReturnType<typeof musicShowArgs>;
export const musicShowQuery = ({
  router: {
    query: { id },
  },
  session,
}: {
  router: NextRouter<
    | "/musics/[id]"
    | "/musics/[id]/issues/[issueId]"
    | "/musics/[id]/pulls/[pullId]"
  >;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.MusicFindUniqueArgs>()({
    where: { id },
    ...musicShowArgs(session),
  });
const musicShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.MusicArgs>()({
    include: {
      user: userArgs,
      band: bandListArgs(session),
      albums: {
        where: {
          resource: { links: { every: { type: "Spotify" } } },
        },
        ...albumListArgs(session),
        take: 1,
      },
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
      resource: {
        include: {
          ...resourceArgs(session).include,
          tags: true,
        },
      },
    },
  });
