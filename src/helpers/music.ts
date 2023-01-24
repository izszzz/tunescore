import type { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { match, P } from "ts-pattern";

import { bookmarkQuery } from "./bookmark";
import setLocale from "./locale";
import { participatedArtistArgs } from "./participation";
import type { SessionArg } from "./user";

type Data = Prisma.MusicGetPayload<{
  include: {
    band: true;
    user: true;
    participations: {
      include: { artist: true; roleMap: { include: { role: true } } };
    };
  };
}>;
export const getMusicOwner = (data: Data, router: NextRouter) =>
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
      type: "NONE" as const,
      owner: null,
    }));

export type MusicListArgsType = ReturnType<typeof musicListArgs>;
export const musicListArgs = (session: SessionArg) => ({
  include: {
    participations: participatedArtistArgs(session),
    bookmarks: bookmarkQuery({ type: "Music", session }),
    band: true,
    user: true,
    _count: {
      select: {
        bookmarks: true,
      },
    },
  },
});
