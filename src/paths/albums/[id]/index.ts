import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListQuery } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import { artistListQuery } from "../../../helpers/artist";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg } from "../../../helpers/user";

export const albumShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) => ({
  where: { id: getRouterId(router) },
  include: {
    musics: musicListQuery(session),
    band: bandListQuery(session),
    artists: artistListQuery(session),
    bookmarks: bookmarkQuery({ type: "Album", session }),
    tagMaps: { include: { tag: true } },
  },
});
