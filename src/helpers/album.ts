import { Prisma } from "@prisma/client";

import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";

export type AlbumListArgsType = ReturnType<typeof albumListArgs>;
export type AlbumArgsType = typeof albumArgs;
export type ResourceAlbumListArgsType = ReturnType<
  typeof resourceAlbumListArgs
>;

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
