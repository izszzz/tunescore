import { Prisma } from "@prisma/client";

import { albumListArgs } from "../../../helpers/album";
import { bandListArgs } from "../../../helpers/band";
import { participatedArtistArgs } from "../../../helpers/participation";
import type { SessionArg } from "../../../helpers/user";
import { userWhere, userArgs } from "../../../helpers/user";

import { pullShowArgs } from "./pulls/[pullId]";

export type MusicShowArgsType = ReturnType<typeof musicShowArgs>;
export const musicShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.MusicArgs>()({
    include: {
      user: userArgs,
      band: bandListArgs(session),
      albums: {
        where: {
          resource: { links: { every: { type: "Spotify" } } },
        },
        ...albumListArgs(session),
        take: 1,
      },
      participations: participatedArtistArgs(session),
      pulls: {
        ...pullShowArgs(session),
        where: { status: "VOTE" as const },
        take: 3,
      },
      transactions: {
        where: { type: "PURCHASE" as const, user: userWhere(session) },
      },
      carts: { where: { user: userWhere(session) } },
    },
  });
