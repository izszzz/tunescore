import { bandListQuery } from "../../../helpers/band";
import { bookmarkQuery } from "../../../helpers/bookmark";
import { participatedMusicQuery } from "../../../helpers/participation";
import { createPath } from "../../../helpers/path";
import { getRouterId, GetRouterArg } from "../../../helpers/router";
import { GetCurrentUserArg } from "../../../helpers/user";

export const artistShowPath = ({
  router,
  session,
}: {
  router: GetRouterArg;
  session: GetCurrentUserArg;
}) =>
  createPath([
    "artist.findUniqueArtist",
    {
      where: { id: getRouterId(router) },
      include: {
        bands: bandListQuery(session),
        participations: participatedMusicQuery(session),
        bookmarks: bookmarkQuery({ type: "Artist", session }),
        tagMaps: { include: { tag: true } },
      },
    },
  ]);
