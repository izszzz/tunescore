import { artistListQuery } from "./artist";
import { musicListQuery } from "./music";
import type { Prisma } from "@prisma/client";
import type { ArtistListQueryType } from "./artist";
import type { MusicListQueryType } from "./music";
import type { SessionArg } from "./user";

export type ParticipatedArtist = Prisma.ParticipationGetPayload<{
  include: {
    artist: ArtistListQueryType;
    roleMap: { include: { role: true } };
  };
}>;
export type ParticipatedMusic = Prisma.ParticipationGetPayload<{
  include: {
    music: MusicListQueryType;
    roleMap: { include: { role: true } };
  };
}>;

export const participatedArtistQuery = (session: SessionArg) => ({
  include: {
    artist: artistListQuery(session),
    roleMap: { include: { role: true } },
  },
});
export const participatedMusicQuery = (session: SessionArg) => ({
  include: {
    music: musicListQuery(session),
    roleMap: { include: { role: true } },
  },
});
