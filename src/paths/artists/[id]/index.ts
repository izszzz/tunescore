import { Prisma } from "@prisma/client";

import { bandListArgs } from "../../../helpers/band";
import { bookmarkArgs } from "../../../helpers/bookmark";
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
}) =>
  Prisma.validator<Prisma.ArtistFindUniqueArgs>()({
    where: { id: getRouterId(router) },
    ...artistShowArgs(session),
  });

export type ArtistShowArgsType = ReturnType<typeof artistShowArgs>;
const artistShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: bandListArgs(session),
      participations: participatedMusicArgs(session),
      bookmarks: bookmarkArgs({ type: "Artist", session }),
      tagMaps: { include: { tag: true } },
    },
  });
