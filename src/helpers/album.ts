import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import setLocale from "./locale";
import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type AlbumListArgsType = ReturnType<typeof albumListArgs>;
export type ResourceAlbumListArgsType = ReturnType<
  typeof resourceAlbumListArgs
>;
type Data = Prisma.ResourceGetPayload<ResourceAlbumListArgsType>;

export const albumArgs = Prisma.validator<Prisma.AlbumArgs>()({
    include: {
      _count: { select: { artists: true, musics: true } },
      band: { include: { resource: { include: { name: true } } } },
      artists: { include: { resource: { include: { name: true } } } },
    },
  }),
  albumListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.AlbumArgs>()({
      include: { ...albumArgs.include, resource: resourceArgs(session) },
    }),
  resourceAlbumListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: { ...resourceArgs(session).include, album: albumArgs },
    });

export const getAlbumOwner = (data: Data | null, router: NextRouter) =>
  match(data?.album)
    .with({ band: P.select(P.not(P.nullish)) }, ({ id, resource }) => ({
      type: "BAND" as const,
      owner: { id, name: setLocale(resource?.name, router) },
    }))
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
