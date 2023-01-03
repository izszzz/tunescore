import { PrismaClient } from "@prisma/client";
import {
  AlbumFactory,
  AlbumOwnedByArtist,
  AlbumOwnedByBand,
  LongTitleAlbumFactory,
} from "./fixtures/album";
import { ArtistFactory, LongNameArtistFactory } from "./fixtures/artist";
import { BandFactory, LongNameBandFactory } from "./fixtures/band";
import { LingTositeSigure } from "./fixtures/lingTositeSigure";
import {
  CopyMusicFactory,
  EnglishMusic,
  ItunesMusic,
  JapaneseMusic,
  LongTitleMusic,
  MusicFactory,
  MusicOwendByBand,
  MusicOwendByComposer,
  MusicOwendByLyrist,
  MusicOwendByUser,
  OriginalMusicFactory,
  ScoreMusicFactory,
  YoutubeMusic,
} from "./fixtures/music";
import { PullFactory } from "./fixtures/pull";
import { IssueFactory } from "./fixtures/issue";
import { TkFromLingTositeSigure } from "./fixtures/tkFromLingTositeSigure";
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
  await ItunesMusic();
  await YoutubeMusic();

  // Album
  await AlbumFactory;
  await LongTitleAlbumFactory;
  await AlbumOwnedByBand();
  await AlbumOwnedByArtist();

  // Band
  await BandFactory;
  await LongNameBandFactory;

  // Artist
  await ArtistFactory;
  await LongNameArtistFactory;

  // Pull
  await PullFactory();

  // Issue
  await IssueFactory();

  // Ling tosite Sigure
  await LingTositeSigure();
  // TK from Ling tosite Sigure
  await TkFromLingTositeSigure();
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
