import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
export const followersQuery = ({ router }: { router: GetRouterArg }) => ({
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
});
