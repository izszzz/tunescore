import { albumListQuery } from "../../../helpers/album";
import { artistListQuery } from "../../../helpers/artist";
import { bandListQuery } from "../../../helpers/band";
import { musicListQuery } from "../../../helpers/music";
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
          music: musicListQuery(session),
          band: bandListQuery(session),
          artist: artistListQuery(session),
          album: albumListQuery(session),
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
