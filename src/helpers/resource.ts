import type { ResourceUnionType } from "@prisma/client";
import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";
import type { Optional } from "utility-types";

import { albumShowArgs } from "../paths/albums/[id]";
import { artistShowArgs } from "../paths/artists/[id]";
import { bandShowArgs } from "../paths/bands/[id]";
import { musicShowArgs } from "../paths/musics/[id]";

import { albumArgs } from "./album";
import { artistArgs } from "./artist";
import { bandArgs } from "./band";
import { bookmarkArgs } from "./bookmark";
import setLocale from "./locale";
import { musicArgs } from "./music";
import type { SessionArg, userArgs } from "./user";

export type ResourceListArgsType = ReturnType<typeof resourceListArgs>;
export type ResourceShowQuery = ReturnType<typeof resourceShowQuery>;
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
  resourceShowQuery = ({
    router: {
      query: { id },
    },
    session,
  }: {
    router: NextRouter<
      | "/musics/[id]"
      | "/musics/[id]/issues/[issueId]"
      | "/musics/[id]/pulls/[pullId]"
      | "/albums/[id]"
      | "/artists/[id]"
      | "/bands/[id]"
    >;
    session: SessionArg;
  }) =>
    Prisma.validator<Prisma.ResourceFindUniqueArgs>()({
      where: { id },
      include: {
        ...resourceArgs(session).include,
        music: musicShowArgs(session),
        band: bandShowArgs(session),
        artist: artistShowArgs(session),
        album: albumShowArgs(session),
      },
    }),
  getResourceShowPathname = (type: ResourceUnionType | "User") =>
    match(type)
      .with("Music", () => "/musics/[id]" as const)
      .with("Artist", () => "/artists/[id]" as const)
      .with("Album", () => "/albums/[id]" as const)
      .with("Band", () => "/bands/[id]" as const)
      .with("User", () => "/users/[id]" as const)
      .exhaustive(),
  getOwner = (
    resource: Optional<
      Prisma.ResourceGetPayload<{
        include: {
          music: {
            include: {
              user: typeof userArgs;
              band: { include: { resource: { include: { name: true } } } };
              participations: {
                include: {
                  artist: {
                    include: { resource: { include: { name: true } } };
                  };
                };
              };
            };
          };
          album: {
            include: {
              band: { include: { resource: { include: { name: true } } } };
              artists: { include: { resource: { include: { name: true } } } };
            };
          };
        };
      }>,
      "album" | "music"
    >,
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
            ({ resource: { id, name } }) => ({
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
          .with(
            { band: P.select(P.not(P.nullish)) },
            ({ resource: { name, id } }) => ({
              type: "Band" as const,
              owner: { id, name: setLocale(name, router) },
            })
          )
          .with({ artists: P.select(P.not(P.nullish)) }, (artists) =>
            isNonEmpty(artists)
              ? {
                  type: "Artist" as const,
                  owner: {
                    id: artists[0].resource.id,
                    name: setLocale(artists[0].resource.name, router),
                  },
                }
              : { type: "NONE" as const, owner: null }
          )
          .otherwise(() => ({ type: "NONE" as const, owner: null }))
      )
      .otherwise(() => ({ type: "NONE" as const, owner: null }));
