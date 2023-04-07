import {
  defineResourceAlbumFactory,
  defineResourceArtistFactory,
  defineResourceMusicFactory,
} from "./resource";

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
          create: [
            {
              resource: { create: await defineResourceArtistFactory().build() },
            },
            {
              resource: { create: await defineResourceArtistFactory().build() },
            },
            {
              resource: { create: await defineResourceArtistFactory().build() },
            },
          ],
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
          create: [
            {
              resource: { create: await defineResourceMusicFactory().build() },
              type: "COPY",
              visibillity: "PUBLIC",
              price: 0,
            },
            {
              resource: { create: await defineResourceMusicFactory().build() },
              type: "COPY",
              visibillity: "PUBLIC",
              price: 0,
            },
            {
              resource: { create: await defineResourceMusicFactory().build() },
              type: "COPY",
              visibillity: "PUBLIC",
              price: 0,
            },
            {
              resource: { create: await defineResourceMusicFactory().build() },
              type: "COPY",
              visibillity: "PUBLIC",
              price: 0,
            },
          ],
        },
      },
    },
  }));
