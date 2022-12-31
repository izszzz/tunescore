import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";

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
