import { Prisma } from "@prisma/client";

import { artistListArgs } from "../../../helpers/artist";
import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";

export type BandShowArgsType = ReturnType<typeof bandShowArgs>;

export const bandShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.BandArgs>()({
    include: {
      artists: artistListArgs(session),
      musics: musicListArgs(session),
    },
  });
