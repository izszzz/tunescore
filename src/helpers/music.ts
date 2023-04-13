import { Prisma } from "@prisma/client";
import type { Optional } from "utility-types";

import { participatedArtistArgs } from "./participation";
import { resourceArgs } from "./resource";
import type { SessionArg } from "./user";
import { userArgs } from "./user";

export type MusicListArgsType = ReturnType<typeof musicListArgs>;
type ResourceMusicListArgsType = ReturnType<typeof resourceMusicListArgs>;
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
    }),
  getMusicLinks = ({
    links,
    music,
    unionType,
  }: Optional<Prisma.ResourceGetPayload<ResourceMusicListArgsType>, "music">) =>
    unionType === "Music"
      ? [
          ...links.filter(({ type }) => type !== "Spotify"),
          ...(music?.albums[0]?.resource.links.filter(
            ({ type }) => type === "Spotify"
          ) ?? []),
        ]
      : links;

const resourceMusicListArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ResourceArgs>()({
    include: {
      ...resourceArgs(session).include,
      music: musicArgs(session),
    },
  });
