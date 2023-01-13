import { artistListQuery } from "../../../helpers/artist";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListQuery } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { GetCurrentUserArg } from "../../../helpers/user";

export const bandShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) => ({
  where: { id: getRouterId(router) },
  include: {
    artists: artistListQuery(session),
    musics: musicListQuery(session),
    bookmarks: bookmarkQuery({ type: "Band", session }),
    tagMaps: { include: { tag: true } },
  },
});
