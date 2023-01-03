import type { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { bookmarkQuery } from "./bookmark";
import { GetCurrentUserArg } from "./user";
import { match, P } from "ts-pattern";
import { participatedArtistQuery } from "./participation";
import setLocale from "./locale";
type Data = Prisma.MusicGetPayload<{
  include: {
    band: true;
    participations: {
      include: { artist: true; roleMap: { include: { role: true } } };
    };
    user: true;
  };
}>;
export const getOwner = (data: Data, router: NextRouter) =>
  match(data)
    .with({ type: "ORIGINAL", user: P.select(P.not(P.nullish)) }, (user) => ({
      type: "USER" as const,
      owner: {
        id: user.id,
        name: user.name,
      },
    }))
    .with(
      {
        type: "COPY",
        band: P.select(P.not(P.nullish)),
      },
      (band) => ({
        type: "BAND" as const,
        owner: { id: band.id, name: setLocale(band.name, router) },
      })
    )
    .with(
      {
        type: "COPY",
        participations: P.select(
          P.when((participations) => participations.length > 0)
        ),
      },
      (participations) =>
        participations[0]
          ? {
              type: "ARTIST" as const,
              owner: {
                id: participations[0].artist.id,
                name: setLocale(participations[0].artist.name, router),
              },
            }
          : { type: "ARTIST" as const, owner: null }
    )
    .otherwise(() => ({
      type: "none",
      owner: null,
    }));

export type MusicListQueryType = {
  include: {
    user: true;
    band: true;
    participations: {
      include: { artist: true; roleMap: { include: { role: true } } };
    };
    bookmarks: true;
    _count: {
      select: {
        bookmarks: true;
      };
    };
  };
};

export const musicListQuery = (session: GetCurrentUserArg) => ({
  include: {
    band: true,
    participations: participatedArtistQuery(session),
    user: true,
    bookmarks: bookmarkQuery({ type: "Music", session }),
    _count: {
      select: {
        bookmarks: true,
      },
    },
  },
});
