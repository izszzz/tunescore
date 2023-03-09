import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { bandListArgs } from "../../../helpers/band";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { participatedMusicArgs } from "../../../helpers/participation";
import type { SessionArg } from "../../../helpers/user";

export type ArtistShowArgsType = ReturnType<typeof artistShowArgs>;
export type ArtistShowQueryType = ReturnType<typeof artistShowQuery>;
export const artistShowQuery = ({
  router: {
    query: { id },
  },
  session,
}: {
  router: NextRouter<"/artists/[id]">;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.ArtistFindUniqueArgs>()({
    where: { id },
    ...artistShowArgs(session),
  });
const artistShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: bandListArgs(session),
      participations: participatedMusicArgs(session),
      bookmarks: bookmarkArgs({ type: "Artist", session }),
      tagMaps: { include: { tag: true } },
    },
  });
