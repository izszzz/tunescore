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
          music: {
            include: {
              user: true,
              composers: true,
              lyrists: true,
              band: true,
              artists: true,
              bookmarks: true,
              _count: {
                select: {
                  bookmarks: true,
                },
              },
            },
          },
          album: { include: { band: true } },
          band: {
            include: {
              _count: {
                select: {
                  bookmarks: true,
                  artists: true,
                  musics: true,
                },
              },
            },
          },
          artist: {
            include: {
              bands: true,
              _count: {
                select: {
                  bookmarks: true,
                },
              },
            },
          },
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
