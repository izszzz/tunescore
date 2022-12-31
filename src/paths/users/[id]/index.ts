import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import {
  GetAuthenticateUserArg,
  getAuthenticateUserId,
} from "../../../helpers/user";

export const userShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetAuthenticateUserArg;
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
