import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { bandListArgs } from "../../../helpers/band";
import { participatedMusicArgs } from "../../../helpers/participation";
import { resourceArgs } from "../../../helpers/resource";
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
  Prisma.validator<Prisma.ResourceFindUniqueArgs>()({
    where: { id },
    ...artistShowArgs(session),
  });
const artistShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ResourceArgs>()({
    include: {
      ...resourceArgs(session).include,
      artist: {
        include: {
          bands: bandListArgs(session),
          participations: participatedMusicArgs(session),
        },
      },
    },
  });
