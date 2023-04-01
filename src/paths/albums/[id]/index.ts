import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { musicListArgs } from "../../../helpers/music";
import { resourceArgs } from "../../../helpers/resource";
import type { SessionArg } from "../../../helpers/user";

export type AlbumShowQueryType = ReturnType<typeof albumShowQuery>;
export type AlbumShowArgsType = ReturnType<typeof albumShowArgs>;

export const albumShowQuery = ({
    router: {
      query: { id },
    },
    session,
  }: {
    router: NextRouter<"/albums/[id]">;
    session: SessionArg;
  }) =>
    Prisma.validator<Prisma.ResourceFindUniqueArgs>()({
      where: { id },
      ...albumShowArgs(session),
    }),
  albumShowArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        ...resourceArgs(session).include,
        album: {
          include: {
            musics: musicListArgs(session),
            band: bandListArgs(session),
            artists: artistListArgs(session),
          },
        },
      },
    });
