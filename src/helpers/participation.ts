import { Prisma } from "@prisma/client";

import { artistListArgs } from "./artist";
import { musicListArgs } from "./music";
import { roleMapInclude } from "./roleMap";
import type { SessionArg } from "./user";

export type ParticipatedArtistArgs = ReturnType<typeof participatedArtistArgs>;
export type ParticipatedMusicArgs = ReturnType<typeof participatedMusicArgs>;
export const participatedArtistArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ParticipationArgs>()({
    include: {
      artist: artistListArgs(session),
      roleMap: { include: roleMapInclude },
    },
  });
export const participatedMusicArgs = (session: SessionArg) => ({
  include: {
    music: musicListArgs(session),
    roleMap: { include: roleMapInclude },
  },
});
