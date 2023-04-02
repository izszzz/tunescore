import type { ResourceUnionType } from "@prisma/client";
import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import { albumArgs } from "./album";
import { artistArgs } from "./artist";
import { bandArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import setLocale from "./locale";
import { musicArgs } from "./music";
import type { SessionArg } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export type ResourceArgsType = ReturnType<typeof resourceArgs>;
export const resourceListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        music: musicArgs(session),
        album: albumArgs,
        band: bandArgs,
        artist: artistArgs,
        ...resourceArgs(session).include,
      },
    }),
  resourceArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.ResourceArgs>()({
      include: {
        name: true,
        bookmarks: bookmarkArgs(session),
        links: true,
        tags: true,
        _count: { select: { bookmarks: true } },
      },
    }),
  getResourceShowPathname = (type: ResourceUnionType) =>
    match(type)
      .with("Music", () => "/musics/[id]" as const)
      .with("Artist", () => "/artists/[id]" as const)
      .with("Album", () => "/albums/[id]" as const)
      .with("Band", () => "/bands/[id]" as const)
      .exhaustive(),
  getOwner = (
    resource: Partial<Prisma.ResourceGetPayload<ResourceListArgsType>>,
    router: NextRouter
  ) =>
    match(resource)
      .with({ music: P.select(P.not(P.nullish)) }, (data) =>
        match(data)
          .with(
            { type: "ORIGINAL", user: P.select(P.not(P.nullish)) },
            ({ id, name }) => ({ type: "User" as const, owner: { id, name } })
          )
          .with(
            { type: "COPY", band: P.select(P.not(P.nullish)) },
            ({ id, resource: { name } }) => ({
              type: "Band" as const,
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
                    type: "Artist" as const,
                    owner: {
                      id: participations[0].artist.id,
                      name: setLocale(
                        participations[0].artist.resource.name,
                        router
                      ),
                    },
                  }
                : { type: "NONE" as const, owner: null }
          )
          .otherwise(() => ({ type: "NONE" as const, owner: null }))
      )
      .with({ album: P.select(P.not(P.nullish)) }, (data) =>
        match(data)
          .with({ band: P.select(P.not(P.nullish)) }, ({ id, resource }) => ({
            type: "Band" as const,
            owner: { id, name: setLocale(resource?.name, router) },
          }))
          .with({ artists: P.select(P.not(P.nullish)) }, (artists) =>
            isNonEmpty(artists)
              ? {
                  type: "Artist" as const,
                  owner: {
                    id: artists[0].id,
                    name: setLocale(artists[0].resource.name, router),
                  },
                }
              : { type: "NONE" as const, owner: null }
          )
          .otherwise(() => ({ type: "NONE" as const, owner: null }))
      )
      .otherwise(() => ({ type: "NONE" as const, owner: null }));
