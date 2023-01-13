import { bandListArgs } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import { artistListArgs } from "../../../helpers/artist";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const albumShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  where: { id: getRouterId(router) },
  ...albumShowArgs(session),
});

export type AlbumShowArgsType = ReturnType<typeof albumShowArgs>;
const albumShowArgs = (session: SessionArg) => ({
  include: {
    musics: musicListArgs(session),
    band: bandListArgs(session),
    artists: artistListArgs(session),
    bookmarks: bookmarkQuery({ type: "Album", session }),
    tagMaps: { include: { tag: true } },
  },
});
