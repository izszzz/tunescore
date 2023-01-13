import { albumListArgs } from "../../../helpers/album";
import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { musicListArgs } from "../../../helpers/music";
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
      music: musicListArgs(session),
      band: bandListArgs(session),
      artist: artistListArgs(session),
      album: albumListArgs(session),
    },
  },
  options: { page: 0, perPage: 12 },
});
