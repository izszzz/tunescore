import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { artistListArgs } from "../../../helpers/artist";
import { musicListArgs } from "../../../helpers/music";
import { resourceArgs } from "../../../helpers/resource";
import type { SessionArg } from "../../../helpers/user";

export type BandShowArgsType = ReturnType<typeof bandShowArgs>;
export type BandShowQueryType = ReturnType<typeof bandShowQuery>;
export const bandShowQuery = ({
  router: {
    query: { id },
  },
  session,
}: {
  router: NextRouter<"/bands/[id]">;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.BandFindUniqueArgs>()({
    where: { id },
    ...bandShowArgs(session),
  });
const bandShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.BandArgs>()({
    include: {
      artists: artistListArgs(session),
      musics: musicListArgs(session),
      resource: {
        include: {
          ...resourceArgs(session).include,
          tags: true,
        },
      },
    },
  });
