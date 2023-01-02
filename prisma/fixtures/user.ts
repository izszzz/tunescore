import { PrismaClient } from "@prisma/client";
import { AlbumFactory } from "./album";
import { ArtistFactory } from "./artist";
import { BandFactory } from "./band";
import { MusicFactory } from "./music";

const prisma = new PrismaClient();

export const UserFactory = prisma.user.create({ data: { name: "user" } });

export const LongNameUserFactory = prisma.user.create({
  data: { name: "a".repeat(200) },
});

export const FollowedUserFactory = async () =>
  await prisma.user.create({
    data: {
      name: "followed user",
      followers: {
        create: { following: { connect: { id: (await UserFactory).id } } },
      },
    },
  });

export const FollowingUserFactory = async () =>
  await prisma.user.create({
    data: {
      name: "following user",
      following: {
        create: { follower: { connect: { id: (await UserFactory).id } } },
      },
    },
  });

export const BookmarksUserFactory = async () =>
  await prisma.user.create({
    data: {
      name: "Bookmarks User",
      bookmarks: {
        create: [
          {
            music: { connect: { id: (await MusicFactory).id } },
            resourceType: "Music",
          },
          {
            album: { connect: { id: (await AlbumFactory).id } },
            resourceType: "Album",
          },
          {
            band: { connect: { id: (await BandFactory).id } },
            resourceType: "Band",
          },
          {
            artist: { connect: { id: (await ArtistFactory).id } },
            resourceType: "Artist",
          },
        ],
      },
    },
  });
