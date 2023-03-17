import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import setLocale from "./locale";
import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type AlbumListArgsType = ReturnType<typeof albumListArgs>;

export const albumListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.AlbumArgs>()({
    include: {
      _count: { select: { artists: true, musics: true } },
      resource: resourceArgs(session),
      band: { include: { resource: true } },
      artists: { include: { resource: true } },
    },
  });

type Data = Prisma.AlbumGetPayload<AlbumListArgsType>;

export const getAlbumOwner = (data: Data, router: NextRouter) =>
  match(data)
    .with(
      { band: P.select(P.not(P.nullish)) },
      ({ id, resource: { name } }) => ({
        type: "BAND" as const,
        owner: { id, name: setLocale(name, router) },
      })
    )
    .with({ artists: P.select(P.not(P.nullish)) }, (artists) =>
      isNonEmpty(artists)
        ? {
            type: "ARTIST" as const,
            owner: {
              id: artists[0].id,
              name: setLocale(artists[0].resource.name, router),
            },
          }
        : { type: "ARTIST" as const, owner: null }
    )
    .otherwise(() => ({ type: "NONE" as const, owner: null }));
