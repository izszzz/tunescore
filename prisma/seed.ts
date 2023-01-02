import { PrismaClient } from "@prisma/client";
import { AlbumFactory, LongTitleAlbumFactory } from "./fixtures/album";
import { ArtistFactory, LongNameArtistFactory } from "./fixtures/artist";
import { BandFactory, LongNameBandFactory } from "./fixtures/band";
import { LingTositeSigure } from "./fixtures/lingTositeSigure";
import {
  CopyMusicFactory,
  EnglishMusic,
  JapaneseMusic,
  LongTitleMusic,
  MusicFactory,
  MusicOwendByBand,
  MusicOwendByComposer,
  MusicOwendByLyrist,
  MusicOwendByUser,
  OriginalMusicFactory,
  ScoreMusicFactory,
} from "./fixtures/music";
import {
  BookmarksUserFactory,
  FollowedUserFactory,
  FollowingUserFactory,
  LongNameUserFactory,
  UserFactory,
} from "./fixtures/user";

const prisma = new PrismaClient();
async function main() {
  await prisma.tag.createMany({
    data: [
      { name: "Rock" },
      { name: "Metal" },
      { name: "Punk" },
      { name: "J-pop" },
      { name: "Jazz" },
    ],
  });

  await prisma.role.createMany({
    data: [
      { name: "Composer" },
      { name: "Lyrist" },
      { name: "Arranger" },
      { name: "Vocal" },
      { name: "Guitar" },
      { name: "Bass" },
      { name: "Drum" },
      { name: "Piano" },
      { name: "Mix" },
      { name: "Mastering" },
    ],
  });

  // User
  await UserFactory;
  await LongNameUserFactory;
  await FollowingUserFactory();
  await FollowedUserFactory();
  await BookmarksUserFactory();

  // Music
  await MusicFactory;
  await OriginalMusicFactory;
  await CopyMusicFactory;
  await ScoreMusicFactory;
  await JapaneseMusic;
  await EnglishMusic;
  await LongTitleMusic;
  await MusicOwendByUser();
  await MusicOwendByComposer();
  await MusicOwendByLyrist();
  await MusicOwendByBand();

  // Album
  await AlbumFactory;
  await LongTitleAlbumFactory;

  // Band
  await BandFactory;
  await LongNameBandFactory;

  // Artist
  await ArtistFactory;
  await LongNameArtistFactory;

  // Ling tosite Sigure
  await LingTositeSigure();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
