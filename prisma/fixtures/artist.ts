import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ArtistFactory = prisma.artist.create({
  data: {
    resource: {
      create: {
        name: { ja: "アーティスト", en: "artist" },
        unionType: "Artist",
      },
    },
  },
});

export const LongNameArtistFactory = prisma.artist.create({
  data: {
    resource: {
      create: {
        name: { ja: "あ".repeat(100), en: "a".repeat(100) },
        unionType: "Artist",
      },
    },
  },
});
