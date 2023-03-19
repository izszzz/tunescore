import { PrismaClient } from "@prisma/client";

import { ArtistFactory } from "./artist";
import { BandFactory } from "./band";
import { MusicFactory } from "./music";

const prisma = new PrismaClient();
export const AlbumFactory = prisma.album.create({
  data: {
    resource: {
      create: { name: { ja: "アルバム", en: "Album" }, unionType: "Album" },
    },
  },
});

export const LongTitleAlbumFactory = prisma.album.create({
  data: {
    resource: {
      create: {
        name: { ja: "あ".repeat(100), en: "a".repeat(100) },
        unionType: "Album",
      },
    },
  },
});

export const AlbumOwnedByBand = async () =>
  prisma.album.create({
    data: {
      resource: {
        create: {
          name: {
            ja: "バンドのアルバム",
            en: "album owned by band",
          },
          unionType: "Album",
        },
      },
      band: { connect: { id: (await BandFactory).id } },
    },
  });

export const AlbumOwnedByArtist = async () =>
  prisma.album.create({
    data: {
      resource: {
        create: {
          name: {
            ja: "アーティストのアルバム",
            en: "artist owned by band",
          },
          unionType: "Album",
        },
      },
      artists: { connect: { id: (await ArtistFactory).id } },
    },
  });

export const AlbumHasMusics = async () =>
  prisma.album.create({
    data: {
      resource: {
        create: {
          name: {
            ja: "曲をもつアルバム",
            en: "album has musics",
          },
          unionType: "Album",
        },
      },
      musics: {
        connect: [
          { id: (await MusicFactory).id },
          { id: (await MusicFactory).id },
          { id: (await MusicFactory).id },
          { id: (await MusicFactory).id },
        ],
      },
    },
  });
