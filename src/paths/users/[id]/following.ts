import { followArgs } from "../../../helpers/follow";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";

export const followingPath = ({ router }: { router: GetRouterArg }) => ({
  args: {
    where: { followingId: getRouterId(router) },
    ...followArgs,
  },
  options: { page: 0, perPage: 12 },
});
