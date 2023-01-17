import { bandListArgs } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedArtistArgs } from "../../../helpers/participation";
import { getRouterId } from "../../../helpers/router";
import { albumListArgs } from "../../../helpers/album";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const musicShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  where: { id: getRouterId(router) },
  ...musicShowArgs(session),
});

export type MusicShowArgsType = ReturnType<typeof musicShowArgs>;
const musicShowArgs = (session: SessionArg) => ({
  include: {
    user: true,
    band: bandListArgs(session),
    albums: albumListArgs(session),
    participations: participatedArtistArgs(session),
    pulls: {
      where: { status: "VOTE" as const },
      include: { vote: true },
      take: 3,
    },
    carts: { where: { user: { id: session?.user?.id } } },
    bookmarks: bookmarkQuery({ type: "Music", session }),
    tagMaps: { include: { tag: true } },
  },
});
