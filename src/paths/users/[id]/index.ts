import { Prisma } from "@prisma/client";

import type { GetRouterArg } from "../../../helpers/router";
import { getRouterId } from "../../../helpers/router";
import { userSelect, userWhere } from "../../../helpers/user";
import type { SessionArg } from "../../../helpers/user";

export type UserShowQueryType = ReturnType<typeof userShowQuery>;
export const userShowQuery = ({
  session,
  router,
}: {
  session: SessionArg;
  router: GetRouterArg;
}) =>
  Prisma.validator<Prisma.UserFindUniqueArgsBase>()({
    where: { id: getRouterId(router) },
    ...userShowArgs(session),
  });

export type UserShowArgsType = ReturnType<typeof userShowArgs>;
export const userShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.UserArgs>()({
    select: {
      followers: { where: { following: userWhere(session) } },
      ...userSelect,
    },
  });
