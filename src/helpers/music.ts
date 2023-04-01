import { Prisma } from "@prisma/client";
import type { NextRouter } from "next/router";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import setLocale from "./locale";
import { participatedArtistArgs } from "./participation";
import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";
import { userArgs } from "./user";

type Data = Prisma.MusicGetPayload<{
  include: {
    band: { include: { resource: { include: { name: true } } } };
    user: typeof userArgs;
    participations: {
      include: {
        artist: { include: { resource: { include: { name: true } } } };
        roles: true;
      };
    };
  };
}>;
export const getMusicOwner = (data: Data | null, router: NextRouter) =>
  match(data)
    .with(
      { type: "ORIGINAL", user: P.select(P.not(P.nullish)) },
      ({ id, name }) => ({ type: "USER" as const, owner: { id, name } })
    )
    .with(
      { type: "COPY", band: P.select(P.not(P.nullish)) },
      ({ id, resource: { name } }) => ({
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
                name: setLocale(participations[0].artist.resource.name, router),
              },
            }
          : { type: "ARTIST" as const, owner: null }
    )
    .otherwise(() => ({ type: "NONE" as const, owner: null }));

export type MusicListArgsType = ReturnType<typeof musicListArgs>;
export const musicArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.MusicArgs>()({
      include: {
        participations: participatedArtistArgs(session),
        albums: {
          where: {
            resource: {
              links: {
                some: { type: "Spotify" },
              },
            },
          },
          include: {
            resource: { include: { links: { where: { type: "Spotify" } } } },
          },
          take: 1,
        },
        band: { include: { resource: { include: { name: true } } } },
        user: userArgs,
      },
    }),
  musicListArgs = (session: SessionArg) =>
    Prisma.validator<Prisma.MusicArgs>()({
      include: {
        ...musicArgs(session).include,
        resource: resourceArgs(session),
      },
    });

export const resourceMusicListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ResourceArgs>()({
    include: {
      ...resourceArgs(session).include,
      music: musicArgs(session),
    },
  });
