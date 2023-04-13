import { Prisma } from "@prisma/client";

import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type BandListArgsType = ReturnType<typeof bandListArgs>;
export const bandArgs = Prisma.validator<Prisma.BandArgs>()({
    include: {
      _count: {
        select: {
          artists: true,
          musics: true,
          albums: true,
        },
      },
    },
  }),
  bandListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.BandArgs>()({
      include: { resource: resourceArgs(session), ...bandArgs.include },
    });
