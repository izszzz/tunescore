import { checkCurrentUserFollowingQuery } from "../../../helpers/follow";
import { getCurrentUserId, userCountQuery } from "../../../helpers/user";
import type { SessionArg } from "../../../helpers/user";
import type { Prisma } from "@prisma/client";

export type UserShowGetPayload = Prisma.UserGetPayload<
  ReturnType<typeof userShowArgs>
>;

export const userShowQuery = (session: SessionArg) => ({
  where: { id: getCurrentUserId(session) },
  ...userShowArgs(session),
});

export const userShowArgs = (session: SessionArg) => ({
  include: {
    accounts: true,
    followers: checkCurrentUserFollowingQuery(session),
    _count: userCountQuery,
  },
});
