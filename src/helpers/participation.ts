import { Prisma } from "@prisma/client";

import { artistListArgs } from "./artist";
import { musicListArgs } from "./music";
import type { SessionArg } from "./user";

export type ParticipatedArtistArgs = ReturnType<typeof participatedArtistArgs>;
export type ParticipatedMusicArgs = ReturnType<typeof participatedMusicArgs>;
export const participatedArtistArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ParticipationArgs>()({
      include: { artist: artistListArgs(session), roles: true },
    }),
  participatedMusicArgs = (session: SessionArg) => ({
    include: {
      music: musicListArgs(session),
      roles: true,
    },
  });
