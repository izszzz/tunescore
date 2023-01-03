import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg} from "../../../helpers/user";
export const followingPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "pagination.follow",
    {
      args: {
        where: { followingId: getRouterId(router) },
        include: {
          follower: {
            include: {
              _count: { select: { following: true, followers: true } },
            },
          },
          following: {
            include: {
              _count: { select: { following: true, followers: true } },
            },
          },
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
