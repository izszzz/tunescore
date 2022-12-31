import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import {
  GetAuthenticateUserArg,
  getAuthenticateUserId,
} from "../../../helpers/user";
export const followingPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetAuthenticateUserArg;
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
