import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";
import { musicListQuery } from "../../../helpers/music";
import { checkCurrentUserFollowingQuery } from "../../../helpers/follow";
import type { GetCurrentUserArg } from "../../../helpers/user";
import type { GetRouterArg } from "../../../helpers/router";

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
        accounts: true,
        followers: checkCurrentUserFollowingQuery(session),
        _count: { select: { following: true, followers: true } },
      },
    },
  ]);

export const userRepositoriesPath = ({
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
        followers: checkCurrentUserFollowingQuery(session),
        _count: { select: { following: true, followers: true } },
        musics: musicListQuery(session),
      },
    },
  ]);
