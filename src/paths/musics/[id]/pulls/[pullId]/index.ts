import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import type { SessionArg } from "../../../../../helpers/user";
import { userArgs } from "../../../../../helpers/user";
import { voteInclude } from "../../../../../helpers/vote";

export type PullShowQueryType = ReturnType<typeof pullShowQuery>;
export const pullShowQuery = ({
  session,
  router,
}: {
  session: SessionArg;
  router: NextRouter;
}) =>
  Prisma.validator<Prisma.PullFindUniqueArgs>()({
    where: { id: router.query.pullId as string },
    ...pullShowArgs(session),
  });

export type PullShowArgsType = ReturnType<typeof pullShowArgs>;
export const pullShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.PullArgs>()({
    include: {
      user: userArgs,
      music: {
        include: {
          pulls: { distinct: ["userId"], take: 5 },
          _count: { select: { pulls: true } },
        },
      },
      vote: { include: voteInclude(session) },
      comments: { include: { user: userArgs } },
    },
  });
