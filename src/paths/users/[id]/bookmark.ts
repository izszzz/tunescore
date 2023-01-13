import { albumListQuery } from "../../../helpers/album";
import { artistListQuery } from "../../../helpers/artist";
import { bandListQuery } from "../../../helpers/band";
import { musicListQuery } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";
export const bookmarkQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
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
});
