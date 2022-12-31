import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg, getCurrentUserId } from "../../../helpers/user";

export const artistShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "artist.findUniqueArtist",
    {
      where: { id: getRouterId(router) },
      include: {
        bands: true,
        composedMusics: {
          include: { composers: true, lyrists: true, band: true },
        },
        writtenMusics: {
          include: { composers: true, lyrists: true, band: true },
        },
        musics: {
          include: { composers: true, lyrists: true, band: true },
        },
        bookmarks: {
          where: {
            user: { id: getCurrentUserId(session) },
            resourceType: "Artist",
          },
        },
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
