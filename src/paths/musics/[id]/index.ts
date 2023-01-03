import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedArtistQuery } from "../../../helpers/participation";
import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg } from "../../../helpers/user";

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
        band: bandListQuery(session),
        participations: participatedArtistQuery(session),
        pulls: { where: { status: "VOTE" }, include: { vote: true }, take: 3 },
        bookmarks: bookmarkQuery({ type: "Music", session }),
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
