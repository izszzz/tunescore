import { artistListQuery } from "./artist";
import { musicListQuery } from "./music";
import type { GetCurrentUserArg } from "./user";

export const participatedArtistQuery = (session: GetCurrentUserArg) => ({
  include: {
    artist: artistListQuery(session),
    roleMap: { include: { role: true } },
  },
});
export const participatedMusicQuery = (session: GetCurrentUserArg) => ({
  include: {
    music: musicListQuery(session),
    roleMap: { include: { role: true } },
  },
});
