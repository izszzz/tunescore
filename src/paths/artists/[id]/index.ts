import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedMusicQuery } from "../../../helpers/participation";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg } from "../../../helpers/user";

export const artistShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) => ({
  where: { id: getRouterId(router) },
  include: {
    bands: bandListQuery(session),
    participations: participatedMusicQuery(session),
    bookmarks: bookmarkQuery({ type: "Artist", session }),
    tagMaps: { include: { tag: true } },
  },
});
