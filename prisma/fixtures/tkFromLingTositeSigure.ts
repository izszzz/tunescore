import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TkFromLingTositeSigure = async () =>
  await prisma.band.create({
    data: {
      resource: {
        create: {
          name: {
            create: {
              ja: "TK from 凛として時雨",
              en: "TK Ling tosite Sigure",
            },
          },
          unionType: "Band",
        },
      },
      musics: { connect: [{ id: (await firstDeath()).id }] },
    },
  });

const firstDeath = async () =>
  await prisma.music.create({
    data: {
      resource: {
        create: {
          name: { create: { ja: "first death", en: "first death" } },
          unionType: "Music",
          links: {
            create: [
              {
                type: "YouTube",
                linkId: "FKq_vltq-Vs",
                medium: "https://i.ytimg.com/vi/FKq_vltq-Vs/mqdefault.jpg",
                large: "https://i.ytimg.com/vi/FKq_vltq-Vs/hqdefault.jpg",
              },
              {
                type: "iTunes",
                linkId:
                  "https://music.apple.com/us/album/first-death/1653891408?i=1653891413&uo=4",
                small:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/30x30bb.jpg",
                medium:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/60x60bb.jpg",
                large:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/100x100bb.jpg",
              },
            ],
          },
        },
      },
      visibillity: "PUBLIC",
      type: "COPY",
    },
  });
