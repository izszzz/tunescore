import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import { bookmarkArgs } from "./bookmark";
import setLocale from "./locale";
import { participatedArtistArgs } from "./participation";
import type { SessionArg } from "./user";
import { userArgs } from "./user";

type Data = Prisma.MusicGetPayload<{
  include: {
    band: true;
    user: typeof userArgs;
    participations: {
      include: { artist: true; roleMap: { include: { role: true } } };
    };
  };
}>;
export const getMusicOwner = (data: Data, router: NextRouter) =>
  match(data)
    .with(
      { type: "ORIGINAL", user: P.select(P.not(P.nullish)) },
      ({ id, name }) => ({ type: "USER" as const, owner: { id, name } })
    )
    .with(
      { type: "COPY", band: P.select(P.not(P.nullish)) },
      ({ id, name }) => ({
        type: "BAND" as const,
        owner: { id, name: setLocale(name, router) },
      })
    )
    .with(
      {
        type: "COPY",
        participations: P.select(P.when((p) => isNonEmpty(p))),
      },
      (participations) =>
        isNonEmpty(participations)
          ? {
              type: "ARTIST" as const,
              owner: {
                id: participations[0].artist.id,
                name: setLocale(participations[0].artist.name, router),
              },
            }
          : { type: "ARTIST" as const, owner: null }
    )
    .otherwise(() => ({ type: "NONE" as const, owner: null }));

export type MusicListArgsType = ReturnType<typeof musicListArgs>;
export const musicListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.MusicArgs>()({
    include: {
      participations: participatedArtistArgs(session),
      bookmarks: bookmarkArgs({ type: "Music", session }),
      band: true,
      user: userArgs,
      _count: { select: { bookmarks: true } },
    },
  });
