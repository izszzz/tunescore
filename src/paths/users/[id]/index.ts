import { getRouterId } from "../../../helpers/router";
import { checkCurrentUserFollowingQuery } from "../../../helpers/follow";
import type { Prisma } from "@prisma/client";
import type { SessionArg } from "../../../helpers/user";
import type { GetRouterArg } from "../../../helpers/router";

export type UserShowGetPayload = Prisma.UserGetPayload<
  ReturnType<typeof userShowArgs>
>;

export const userShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  where: { id: getRouterId(router) },
  ...userShowArgs(session),
});

export const userShowArgs = (session: SessionArg) => ({
  include: {
    accounts: true,
    followers: checkCurrentUserFollowingQuery(session),
    _count: { select: { following: true, followers: true } },
  },
});
