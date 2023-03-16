import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const BandFactory = prisma.band.create({
  data: {
    resource: {
      create: { name: { ja: "バンド", en: "band" }, unionType: "Band" },
    },
  },
});

export const LongNameBandFactory = prisma.band.create({
  data: {
    resource: {
      create: {
        name: {
          ja: "あ".repeat(100),
          en: "a".repeat(100),
        },
        unionType: "Band",
      },
    },
  },
});
