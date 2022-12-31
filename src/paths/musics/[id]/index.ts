import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";

export const musicShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "music.findUniqueMusic",
    {
      where: { id: getRouterId(router) },
      include: {
        user: true,
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
        composers: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        lyrists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        pulls: { where: { status: "VOTE" }, include: { vote: true }, take: 3 },
        bookmarks: {
          where: {
            user: { id: getCurrentUserId(session) },
            resourceType: "Music",
          },
        },
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
