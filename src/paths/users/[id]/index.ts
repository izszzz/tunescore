import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg} from "../../../helpers/user";

export const userShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "user.findUniqueUser",
    {
      where: { id: getRouterId(router) },
      include: {
        _count: { select: { following: true, followers: true } },
        followers: {
          include: {
            following: {
              include: {
                _count: { select: { following: true, followers: true } },
              },
            },
          },
        },
        bookmarks: true,
      },
    },
  ]);
