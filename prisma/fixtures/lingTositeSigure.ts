import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const LingTositeSigure = async () =>
  await prisma.band.create({
    data: {
      resource: {
        create: {
          name: {
            create: {
              ja: "凛として時雨",
              en: "Ling tosite Sigure",
            },
          },
          unionType: "Band",
        },
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
      resource: {
        create: {
          name: { create: { ja: "abnormalize", en: "abnormalize" } },
          unionType: "Music",
        },
      },
      visibillity: "PUBLIC",
      type: "COPY",
      participations: await participations(),
    },
  });

const beautifulCircus = async () =>
  await prisma.music.create({
    data: {
      resource: {
        create: {
          name: { create: { ja: "Beautiful Circus", en: "Beautiful Circus" } },
          unionType: "Music",
        },
      },
      visibillity: "PUBLIC",
      type: "COPY",
      participations: await participations(),
    },
  });

const participations = async () => ({
  create: [
    {
      artist: { connect: { id: (await tk).id } },
      roles: {
        connect: [
          {
            id: (
              await prisma.role.findUnique({
                where: { name: "Composer" },
              })
            )?.id,
          },
          {
            id: (
              await prisma.role.findUnique({
                where: { name: "Lyrist" },
              })
            )?.id,
          },
          {
            id: (
              await prisma.role.findUnique({
                where: { name: "Vocal" },
              })
            )?.id,
          },
        ],
      },
    },
    {
      artist: { connect: { id: (await miyoko).id } },
      roles: {
        connect: {
          id: (
            await prisma.role.findUnique({
              where: { name: "Bass" },
            })
          )?.id,
        },
      },
    },
    {
      artist: { connect: { id: (await nakano).id } },
      roles: {
        connect: {
          id: (
            await prisma.role.findUnique({
              where: { name: "Drum" },
            })
          )?.id,
        },
      },
    },
  ],
});

const tk = prisma.artist.create({
  data: {
    resource: {
      create: {
        name: { create: { ja: "TK", en: "TK" } },
        unionType: "Artist",
      },
    },
  },
});

const miyoko = prisma.artist.create({
  data: {
    resource: {
      create: {
        name: { create: { ja: "345", en: "345" } },
        unionType: "Artist",
      },
    },
  },
});

const nakano = prisma.artist.create({
  data: {
    resource: {
      create: {
        name: {
          create: {
            ja: "ピエール中野",
            en: "pierre nakano",
          },
        },
        unionType: "Artist",
      },
    },
  },
});

const imperfect = prisma.album.create({
  data: {
    resource: {
      create: {
        name: { create: { ja: "i'mperfect", en: "i'mperfect" } },
        unionType: "Album",
      },
    },
  },
});
