import { participationsQuery } from "../../../helpers/participation";
import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";
export const bookmarkPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
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
              participations: participationsQuery,
              band: true,
              bookmarks: true,
              _count: {
                select: {
                  bookmarks: true,
                },
              },
            },
          },
          band: {
            include: {
              _count: {
                select: {
                  bookmarks: true,
                  artists: true,
                  musics: true,
                  albums: true,
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
          album: {
            include: {
              _count: {
                select: {
                  musics: true,
                  bookmarks: true,
                  artists: true,
                },
              },
              band: true,
            },
          },
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
