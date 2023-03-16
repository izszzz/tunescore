import { Prisma } from "@prisma/client";

import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type ArtistListArgsType = ReturnType<typeof artistListArgs>;
export const artistListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: { include: { resource: true } },
      resource: resourceArgs(session),
    },
  });
