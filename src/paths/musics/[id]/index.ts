import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedArtistQuery } from "../../../helpers/participation";
import { getRouterId } from "../../../helpers/router";
import { albumListQuery } from "../../../helpers/album";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg } from "../../../helpers/user";

export const musicShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) => ({
  where: { id: getRouterId(router) },
  include: {
    user: true,
    band: bandListQuery(session),
    albums: albumListQuery(session),
    participations: participatedArtistQuery(session),
    pulls: {
      where: { status: "VOTE" as const },
      include: { vote: true },
      take: 3,
    },
    bookmarks: bookmarkQuery({ type: "Music", session }),
    tagMaps: { include: { tag: true } },
  },
});
