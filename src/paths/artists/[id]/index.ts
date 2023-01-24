import { bandListArgs } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedMusicArgs } from "../../../helpers/participation";
import { getRouterId } from "../../../helpers/router";
import type { GetRouterArg } from "../../../helpers/router";
import type { SessionArg } from "../../../helpers/user";

export const artistShowQuery = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: SessionArg;
}) => ({
  where: { id: getRouterId(router) },
  ...artistShowArgs(session),
});

export type ArtistShowArgsType = ReturnType<typeof artistShowArgs>;
const artistShowArgs = (session: SessionArg) => ({
  include: {
    bands: bandListArgs(session),
    participations: participatedMusicArgs(session),
    bookmarks: bookmarkQuery({ type: "Artist", session }),
    tagMaps: { include: { tag: true } },
  },
});
