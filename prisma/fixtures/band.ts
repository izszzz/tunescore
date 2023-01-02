import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const BandFactory = prisma.band.create({
  data: {
    name: {
      ja: "バンド",
      en: "band",
    },
  },
});

export const LongNameBandFactory = prisma.band.create({
  data: {
    name: {
      ja: "あ".repeat(100),
      en: "a".repeat(100),
    },
  },
});
