import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
export const followersPath = ({ router }: { router: GetRouterArg }) =>
  createPath([
    "pagination.follow",
    {
      args: {
        where: { followerId: getRouterId(router) },
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
