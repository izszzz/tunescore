import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ArtistFactory = prisma.artist.create({
  data: {
    name: {
      ja: "アーティスト",
      en: "artist",
    },
  },
});

export const LongNameArtistFactory = prisma.artist.create({
  data: {
    name: {
      ja: "あ".repeat(100),
      en: "a".repeat(100),
    },
  },
});
