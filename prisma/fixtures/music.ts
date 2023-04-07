import { PrismaClient } from "@prisma/client";

import {
  defineResourceArtistFactory,
  defineResourceBandFactory,
  defineResourceMusicFactory,
} from "./resource";
import { UserFactory } from "./user";

const prisma = new PrismaClient();

export const MusicFactory = defineResourceMusicFactory({
    name: { create: { ja: "曲", en: "music" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        price: 0,
        lyric: `
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    a
    `,
      },
    },
  }),
  MusicPaidFactory = defineResourceMusicFactory({
    name: { create: { ja: "有料", en: "Paid" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        price: 100,
      },
    },
  }),
  MusicOriginalFactory = defineResourceMusicFactory({
    name: { create: { en: "Original Music", ja: "オリジナル曲" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicCopyFactory = defineResourceMusicFactory({
    name: { create: { en: "Copy Music", ja: "コピー曲" } },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicScoreFactory = defineResourceMusicFactory({
    name: { create: { en: "Score", ja: "スコア" } },
    music: {
      create: {
        score: "3.3 3.2 3.4",
        type: "ORIGINAL",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicJapaneseFactory = defineResourceMusicFactory({
    name: { create: { ja: "日本語のみ" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicEnglishFactory = defineResourceMusicFactory({
    name: { create: { en: "Only English" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicOwendByUserFactory = defineResourceMusicFactory(async () => ({
    name: { create: { ja: "ユーザーの曲", en: "Owned by User" } },
    music: {
      create: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        user: {
          connect: { id: (await UserFactory).id },
        },
      },
    },
  })),
  MusicOwendByComposerFactory = defineResourceMusicFactory(async () => ({
    name: { create: { ja: "作曲者の曲", en: "Owned by Compsoer" } },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
        participations: {
          create: {
            artist: {
              create: {
                resource: {
                  create: await defineResourceArtistFactory().build(),
                },
              },
            },
            roles: {
              connect: {
                id: (
                  await prisma.role.findUnique({
                    where: { name: "Compsoer" },
                  })
                )?.id,
                name: "Composer",
              },
            },
          },
        },
      },
    },
  })),
  MusicOwendByLyristFactory = defineResourceMusicFactory(async () => ({
    name: { create: { ja: "作詞者の曲", en: "Owned by Lyrist" } },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
        participations: {
          create: {
            artist: {
              create: {
                resource: {
                  create: await defineResourceArtistFactory().build(),
                },
              },
            },
            roles: {
              connect: {
                id: (
                  await prisma.role.findUnique({
                    where: { name: "Lyrist" },
                  })
                )?.id,
              },
            },
          },
        },
      },
    },
  })),
  MusicOwendByBandFactory = defineResourceMusicFactory(async () => ({
    name: { create: { ja: "バンドの曲", en: "Owned by Band" } },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
        band: {
          create: {
            resource: { create: await defineResourceBandFactory().build() },
          },
        },
      },
    },
  })),
  MusicItunesFactory = defineResourceMusicFactory({
    name: { create: { ja: "iTunes 曲", en: "iTunes Music" } },
    unionType: "Music",
    links: {
      create: {
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
    },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
      },
    },
  }),
  MusicYoutubeFactory = defineResourceMusicFactory({
    name: { create: { ja: "Youtube 曲", en: "Youtube Music" } },
    unionType: "Music",
    links: {
      create: {
        type: "YouTube",
        linkId: "FKq_vltq-Vs",
        medium: "https://i.ytimg.com/vi/FKq_vltq-Vs/mqdefault.jpg",
        large: "https://i.ytimg.com/vi/FKq_vltq-Vs/hqdefault.jpg",
      },
    },
    music: {
      create: {
        type: "COPY",
        visibillity: "PUBLIC",
      },
    },
  });
