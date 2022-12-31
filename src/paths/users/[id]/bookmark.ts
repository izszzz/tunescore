import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import {
  GetAuthenticateUserArg,
  getAuthenticateUserId,
} from "../../../helpers/user";
export const bookmarkPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetAuthenticateUserArg;
}) =>
  createPath([
    "pagination.bookmark",
    {
      args: {
        where: { userId: getRouterId(router) },
        include: {
          music: true,
          album: true,
          band: true,
          artist: true,
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
