import { PrismaClient } from "@prisma/client";
import { initialize } from "@quramy/prisma-fabbrica";

import {
  AlbumHasMusicsFactory,
  AlbumOwnedByArtistFactory,
  AlbumOwnedByBandFactory,
} from "./fixtures/album";
import { ResourceArtistFactory } from "./fixtures/artist";
import { LingTositeSigure } from "./fixtures/lingTositeSigure";
import {
  MusicCopyFactory,
  MusicEnglishFactory,
  MusicJapaneseFactory,
  ResourceMusicFactory,
  MusicOwendByBandFactory,
  MusicOwendByComposerFactory,
  MusicOwendByLyristFactory,
  MusicOwendByUserFactory,
  MusicOriginalFactory,
  MusicPaidFactory,
  MusicScoreFactory,
  MusicYoutubeFactory,
  MusicItunesFactory,
} from "./fixtures/music";
import { PullFactory } from "./fixtures/pull";
import {
  ResourceAlbumLongNameFactory,
  ResourceArtistLongNameFactory,
  ResourceBandLongNameFactory,
  ResourceMusicLongNameFactory,
} from "./fixtures/resource";
import { TkFromLingTositeSigure } from "./fixtures/tkFromLingTositeSigure";
import {
  BookmarksUserFactory,
  FollowedUserFactory,
  FollowingUserFactory,
  LongNameUserFactory,
  UserFactory,
} from "./fixtures/user";

const prisma = new PrismaClient();
initialize({ prisma });
async function main() {
  try {
    await prisma.genre.createMany({
      data: [
        { name: "Rock" },
        { name: "Metal" },
        { name: "Punk" },
        { name: "J-pop" },
        { name: "Jazz" },
      ],
    });
  } catch {
    console.log();
  }

  try {
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
  } catch {
    console.log();
  }
  // User
  await UserFactory.create();
  await LongNameUserFactory.create();
  await FollowingUserFactory.create();
  await FollowedUserFactory.create();
  await BookmarksUserFactory.create();

  // Music
  await ResourceMusicFactory.create();
  await MusicPaidFactory.create();
  await MusicOriginalFactory.create();
  await MusicCopyFactory.create();
  await MusicScoreFactory.create();
  await MusicJapaneseFactory.create();
  await MusicEnglishFactory.create();
  await ResourceMusicLongNameFactory.create();
  await MusicOwendByUserFactory.create();
  await MusicOwendByComposerFactory.create();
  await MusicOwendByLyristFactory.create();
  await MusicOwendByBandFactory.create();
  await MusicItunesFactory.create();
  await MusicYoutubeFactory.create();

  // Album
  await ResourceAlbumLongNameFactory.create();
  await AlbumOwnedByBandFactory.create();
  await AlbumOwnedByArtistFactory.create();
  await AlbumHasMusicsFactory.create();

  // Band
  await ResourceBandLongNameFactory.create();

  // Artist
  await ResourceArtistFactory.create();
  await ResourceArtistLongNameFactory.create();

  // Pull
  await PullFactory();

  // Issue
  // await IssueFactory();

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
