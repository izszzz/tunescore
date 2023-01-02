import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const AlbumFactory = prisma.album.create({
  data: {
    title: {
      ja: "アルバム",
      en: "Album",
    },
  },
});

export const LongTitleAlbumFactory = prisma.album.create({
  data: {
    title: {
      ja: "あ".repeat(100),
      en: "a".repeat(100),
    },
  },
});
