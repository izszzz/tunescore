import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";

import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { bookmarkArgs } from "../../../helpers/bookmark";
import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export const albumShowQuery = ({
  router: {
    query: { id },
  },
  session,
}: {
  router: NextRouter<"/albums/[id]">;
  session: SessionArg;
}) =>
  Prisma.validator<Prisma.AlbumFindUniqueArgs>()({
    where: { id },
    ...albumShowArgs(session),
  });

export type AlbumShowArgsType = ReturnType<typeof albumShowArgs>;
const albumShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.AlbumArgs>()({
    include: {
      musics: musicListArgs(session),
      band: bandListArgs(session),
      artists: artistListArgs(session),
      bookmarks: bookmarkArgs({ type: "Album", session }),
      tagMaps: { include: { tag: true } },
    },
  });
