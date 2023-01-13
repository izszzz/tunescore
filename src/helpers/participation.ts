import { artistListArgs } from "./artist";
import { musicListArgs } from "./music";
import { roleMapArgs } from "./roleMap";
import type { SessionArg } from "./user";

export type ParticipatedArtistArgs = ReturnType<typeof participatedArtistArgs>;
export type ParticipatedMusicArgs = ReturnType<typeof participatedMusicArgs>;
export const participatedArtistArgs = (session: SessionArg) => ({
  include: {
    artist: artistListArgs(session),
    roleMap: roleMapArgs,
  },
});
export const participatedMusicArgs = (session: SessionArg) => ({
  include: {
    music: musicListArgs(session),
    roleMap: roleMapArgs,
  },
});
