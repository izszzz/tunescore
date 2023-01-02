import { PrismaClient } from "@prisma/client";
import { initialize } from "../generated/fabbrica";
import { ArtistFactory } from "./artist";
import { BandFactory } from "./band";
import { UserFactory } from "./user";

const prisma = new PrismaClient();
initialize({ prisma });

export const MusicFactory = prisma.music.create({
  data: {
    title: { ja: "曲", en: "music" },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const OriginalMusicFactory = prisma.music.create({
  data: {
    title: {
      en: "Original Music",
      ja: "オリジナル曲",
    },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const CopyMusicFactory = prisma.music.create({
  data: {
    title: {
      en: "Copy Music",
      ja: "コピー曲",
    },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const ScoreMusicFactory = prisma.music.create({
  data: {
    title: {
      en: "Score",
      ja: "スコア",
    },
    score: "3.3 3.2 3.4",
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const JapaneseMusic = prisma.music.create({
  data: {
    title: {
      ja: "日本語のみ",
    },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const EnglishMusic = prisma.music.create({
  data: {
    title: {
      en: "Only English",
    },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const LongTitleMusic = prisma.music.create({
  data: {
    title: {
      ja: "あ".repeat(100),
      en: "a".repeat(100),
    },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const MusicOwendByUser = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "ユーザーの曲",
        en: "Owned by User",
      },
      type: "ORIGINAL",
      visibility: "PUBLIC",
      user: {
        connect: { id: (await UserFactory).id },
      },
    },
  });

export const MusicOwendByComposer = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "作曲者の曲",
        en: "Owned by Compsoer",
      },
      type: "ORIGINAL",
      visibility: "PUBLIC",
      participations: {
        create: {
          artist: {
            connect: { id: (await ArtistFactory).id },
          },
          roleMap: {
            create: {
              role: {
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
    },
  });

export const MusicOwendByLyrist = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "作詞者の曲",
        en: "Owned by Lyrist",
      },
      type: "ORIGINAL",
      visibility: "PUBLIC",
      participations: {
        create: {
          artist: {
            connect: { id: (await ArtistFactory).id },
          },
          roleMap: {
            create: {
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
          },
        },
      },
    },
  });

export const MusicOwendByBand = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "バンドの曲",
        en: "Owned by Band",
      },
      type: "ORIGINAL",
      visibility: "PUBLIC",
      band: {
        connect: { id: (await BandFactory).id },
      },
    },
  });
