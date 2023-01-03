import { artistListQuery } from "./artist";
import { musicListQuery } from "./music";
import { GetCurrentUserArg } from "./user";

export const participatedArtistQuery = (session: GetCurrentUserArg) => ({
  include: {
    artist: artistListQuery,
    roleMap: { include: { role: true } },
  },
});
export const participatedMusicQuery = (session: GetCurrentUserArg) => ({
  include: {
    music: musicListQuery(session),
    roleMap: { include: { role: true } },
  },
});
