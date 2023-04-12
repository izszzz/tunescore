import { Prisma } from "@prisma/client";

import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export const albumShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.AlbumArgs>()({
    include: {
      musics: musicListArgs(session),
      band: bandListArgs(session),
      artists: artistListArgs(session),
    },
  });
