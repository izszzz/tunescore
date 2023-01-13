import { getRouterId } from "../../../helpers/router";
import { followArgs } from "../../../helpers/follow";
import type { GetRouterArg } from "../../../helpers/router";
export const followersQuery = ({ router }: { router: GetRouterArg }) => ({
  args: {
    where: { followerId: getRouterId(router) },
    ...followArgs,
  },
  options: { page: 0, perPage: 12 },
});
