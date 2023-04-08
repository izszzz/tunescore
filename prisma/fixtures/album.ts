import { ArtistFactory } from "./artist";
import { MusicFactory } from "./music";
import { defineResourceAlbumFactory } from "./resource";

export const AlbumOwnedByBandFactory = defineResourceAlbumFactory({
    name: { create: { ja: "バンドのアルバム", en: "album owned by band" } },
    album: { create: {} },
  }),
  AlbumOwnedByArtistFactory = defineResourceAlbumFactory(async () => ({
    name: {
      create: { ja: "アーティストのアルバム", en: "artist owned by band" },
    },
    album: {
      create: {
        artists: {
          create: await ArtistFactory.buildList(3),
        },
      },
    },
  })),
  AlbumHasMusicsFactory = defineResourceAlbumFactory(async () => ({
    name: {
      create: { ja: "曲をもつアルバム", en: "album has musics" },
    },
    album: {
      create: {
        musics: {
          create: await MusicFactory.buildList(5),
        },
      },
    },
  }));
