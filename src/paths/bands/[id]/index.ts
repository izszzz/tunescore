import { artistListQuery } from "../../../helpers/artist";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListQuery } from "../../../helpers/music";
import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg } from "../../../helpers/user";

export const bandShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "band.findUniqueBand",
    {
      where: { id: getRouterId(router) },
      include: {
        artists: artistListQuery(session),
        musics: musicListQuery(session),
        bookmarks: bookmarkQuery({ type: "Band", session }),
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
