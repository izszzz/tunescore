import { artistListArgs } from "../../../helpers/artist";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const bandShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  where: { id: getRouterId(router) },
  include: {
    artists: artistListArgs(session),
    musics: musicListArgs(session),
    bookmarks: bookmarkQuery({ type: "Band", session }),
    tagMaps: { include: { tag: true } },
  },
});
