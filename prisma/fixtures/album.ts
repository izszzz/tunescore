import { PrismaClient } from "@prisma/client";

import { ArtistFactory } from "./artist";
import { BandFactory } from "./band";
import { MusicFactory } from "./music";

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

export const AlbumOwnedByBand = async () =>
  prisma.album.create({
    data: {
      title: {
        ja: "バンドのアルバム",
        en: "album owned by band",
      },
      band: { connect: { id: (await BandFactory).id } },
    },
  });

export const AlbumOwnedByArtist = async () =>
  prisma.album.create({
    data: {
      title: {
        ja: "アーティストのアルバム",
        en: "artist owned by band",
      },
      artists: { connect: { id: (await ArtistFactory).id } },
    },
  });

export const AlbumHasMusics = async () =>
  prisma.album.create({
    data: {
      title: {
        ja: "曲をもつアルバム",
        en: "album has musics",
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
