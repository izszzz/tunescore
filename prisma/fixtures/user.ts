import { defineUserFactory } from "../generated/fabbrica";

export const UserFactory = defineUserFactory({ defaultData: { name: "user" } });

export const LongNameUserFactory = defineUserFactory({
  defaultData: { name: "a".repeat(200) },
});

export const FollowedUserFactory = defineUserFactory({
  defaultData: {
    name: "followed user",
    followers: { create: { following: UserFactory } },
  },
});

export const FollowingUserFactory = defineUserFactory({
  defaultData: {
    name: "following user",
    following: { create: { follower: UserFactory } },
  },
});

export const BookmarksUserFactory = defineUserFactory({
  defaultData: {
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
