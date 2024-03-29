import { Prisma } from "@prisma/client";

import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type ArtistListArgsType = ReturnType<typeof artistListArgs>;
export const artistArgs = Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: { include: { resource: { include: { name: true } } } },
    },
  }),
  artistListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ArtistArgs>()({
      include: { ...artistArgs.include, resource: resourceArgs(session) },
    });
