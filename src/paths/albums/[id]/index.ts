import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";

export const albumShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "album.findUniqueAlbum",
    {
      where: { id: getRouterId(router) },
      include: {
        musics: {
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
        artists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        bookmarks: {
          where: {
            user: { id: getCurrentUserId(session) },
            resourceType: "Album",
          },
        },
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
