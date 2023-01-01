import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListQuery } from "../../../helpers/music";
import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg } from "../../../helpers/user";

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
        musics: musicListQuery(session),
        band: bandListQuery,
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
        bookmarks: bookmarkQuery({ type: "Album", session }),
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
