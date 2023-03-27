import { PrismaClient } from "@prisma/client";

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
            resource: {
              create: {
                name: { create: { en: "Bookmark Music" } },
                unionType: "Music",
              },
            },
          },
          {
            resource: {
              create: {
                name: { create: { en: "Bookmark Album" } },
                unionType: "Album",
              },
            },
          },
          {
            resource: {
              create: {
                name: { create: { en: "Bookmark Band" } },
                unionType: "Band",
              },
            },
          },
          {
            resource: {
              create: {
                name: { create: { en: "Bookmark Artist" } },
                unionType: "Artist",
              },
            },
          },
        ],
      },
    },
  });
