import { defineResourceFactory } from "../generated/fabbrica";

export const defineResourceLongNameFactory = (
    defaultData?: NonNullable<
      Parameters<typeof defineResourceFactory>[0]
    >["defaultData"]
  ) =>
    defineResourceFactory({
      defaultData: () => ({
        name: { create: { ja: "あ".repeat(100), en: "a".repeat(100) } },
        ...defaultData,
      }),
    }),
  ResourceMusicLongNameFactory = defineResourceLongNameFactory({
    unionType: "Music",
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
      },
    },
  }),
  ResourceAlbumLongNameFactory = defineResourceLongNameFactory({
    unionType: "Album",
    album: { create: {} },
  }),
  ResourceBandLongNameFactory = defineResourceLongNameFactory({
    unionType: "Band",
    band: { create: {} },
  }),
  ResourceArtistLongNameFactory = defineResourceLongNameFactory({
    unionType: "Artist",
    artist: { create: {} },
  }),
  defineResourceMusicFactory = (
    defaultData?: NonNullable<
      Parameters<typeof defineResourceFactory>[0]
    >["defaultData"]
  ) =>
    defineResourceFactory({
      defaultData: ({ seq }) => ({
        unionType: "Music",
        name: { create: { ja: `曲${seq}`, en: `Music${seq}` } },
        ...defaultData,
      }),
    }),
  defineResourceArtistFactory = (
    defaultData?: NonNullable<
      Parameters<typeof defineResourceFactory>[0]
    >["defaultData"]
  ) =>
    defineResourceFactory({
      defaultData: ({ seq }) => ({
        unionType: "Artist",
        name: { create: { ja: `アーティスト${seq}`, en: `Artist${seq}` } },
        ...defaultData,
      }),
    }),
  defineResourceBandFactory = (
    defaultData?: NonNullable<
      Parameters<typeof defineResourceFactory>[0]
    >["defaultData"]
  ) =>
    defineResourceFactory({
      defaultData: ({ seq }) => ({
        unionType: "Band",
        name: { create: { ja: `バンド${seq}`, en: `Band${seq}` } },
        ...defaultData,
      }),
    }),
  defineResourceAlbumFactory = (
    defaultData?: NonNullable<
      Parameters<typeof defineResourceFactory>[0]
    >["defaultData"]
  ) =>
    defineResourceFactory({
      defaultData: ({ seq }) => ({
        unionType: "Album",
        name: { create: { ja: `Album${seq}`, en: `Album${seq}` } },
        ...defaultData,
      }),
    });
