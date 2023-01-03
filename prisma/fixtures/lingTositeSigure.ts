import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const LingTositeSigure = async () =>
  await prisma.band.create({
    data: {
      name: {
        ja: "凛として時雨",
        en: "Ling tosite Sigure",
      },
      artists: {
        connect: [
          { id: (await tk).id },
          { id: (await miyoko).id },
          { id: (await nakano).id },
        ],
      },
      musics: {
        connect: [
          { id: (await abnormalize()).id },
          { id: (await beautifulCircus()).id },
        ],
      },
    },
  });

const abnormalize = async () =>
  await prisma.music.create({
    data: {
      title: { ja: "abnormalize", en: "abnormalize" },
      visibility: "PUBLIC",
      type: "COPY",
      participations: await participations(),
    },
  });

const beautifulCircus = async () =>
  await prisma.music.create({
    data: {
      title: { ja: "Beautiful Circus", en: "Beautiful Circus" },
      visibility: "PUBLIC",
      type: "COPY",
      participations: await participations(),
    },
  });

const participations = async () => ({
  create: [
    {
      artist: { connect: { id: (await tk).id } },
      roleMap: {
        create: [
          {
            role: {
              connect: {
                id: (
                  await prisma.role.findUnique({
                    where: { name: "Composer" },
                  })
                )?.id,
              },
            },
          },
          {
            role: {
              connect: {
                id: (
                  await prisma.role.findUnique({
                    where: { name: "Lyrist" },
                  })
                )?.id,
              },
            },
          },
          {
            role: {
              connect: {
                id: (
                  await prisma.role.findUnique({
                    where: { name: "Vocal" },
                  })
                )?.id,
              },
            },
          },
        ],
      },
    },
    {
      artist: { connect: { id: (await miyoko).id } },
      roleMap: {
        create: {
          role: {
            connect: {
              id: (
                await prisma.role.findUnique({
                  where: { name: "Bass" },
                })
              )?.id,
            },
          },
        },
      },
    },
    {
      artist: { connect: { id: (await nakano).id } },
      roleMap: {
        create: {
          role: {
            connect: {
              id: (
                await prisma.role.findUnique({
                  where: { name: "Drum" },
                })
              )?.id,
            },
          },
        },
      },
    },
  ],
});

const tk = prisma.artist.create({
  data: {
    name: {
      ja: "TK",
      en: "TK",
    },
  },
});

const miyoko = prisma.artist.create({
  data: {
    name: {
      ja: "345",
      en: "345",
    },
  },
});

const nakano = prisma.artist.create({
  data: {
    name: {
      ja: "ピエール中野",
      en: "pierre nakano",
    },
  },
});
