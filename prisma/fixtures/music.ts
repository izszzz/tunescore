import { PrismaClient } from "@prisma/client";

import { ArtistFactory } from "./artist";
import { BandFactory } from "./band";
import { UserFactory } from "./user";

const prisma = new PrismaClient();

export const MusicFactory = prisma.music.create({
  data: {
    title: { ja: "曲", en: "music" },
    type: "ORIGINAL",
    visibility: "PUBLIC",
  },
});

export const PaidMusicFactory = prisma.music.create({
  data: {
    title: { ja: "有料", en: "Paid" },
    type: "ORIGINAL",
    visibility: "PUBLIC",
    price: 100,
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
    type: "COPY",
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
      type: "COPY",
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
      type: "COPY",
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
      type: "COPY",
      visibility: "PUBLIC",
      band: {
        connect: { id: (await BandFactory).id },
      },
    },
  });

export const ItunesMusic = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "iTunes 曲",
        en: "iTunes Music",
      },
      type: "COPY",
      visibility: "PUBLIC",
      link: {
        streaming: {
          youtube: null,
          spotify: null,
          itunes: {
            id: "https://music.apple.com/us/album/first-death/1653891408?i=1653891413&uo=4",
            image: {
              size: {
                small:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/30x30bb.jpg",
                medium:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/60x60bb.jpg",
                large:
                  "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/33/a0/67/33a067cb-48e0-cf1d-e64b-13393dbbded9/4547366594591.jpg/100x100bb.jpg",
              },
            },
          },
        },
      },
    },
  });
export const YoutubeMusic = async () =>
  await prisma.music.create({
    data: {
      title: {
        ja: "Youtube 曲",
        en: "Youtube Music",
      },
      type: "COPY",
      visibility: "PUBLIC",
      link: {
        streaming: {
          youtube: {
            id: "FKq_vltq-Vs",
            image: {
              size: {
                small: null,
                medium: "https://i.ytimg.com/vi/FKq_vltq-Vs/mqdefault.jpg",
                large: "https://i.ytimg.com/vi/FKq_vltq-Vs/hqdefault.jpg",
              },
            },
          },
          spotify: null,
          itunes: null,
        },
      },
    },
  });
