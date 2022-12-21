import { z } from 'zod';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { VoteFindManySchema } from '../findManyVote.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManySchema)])
      .optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManySchema)])
      .optional(),
    musics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    notifications: z
      .union([z.boolean(), z.lazy(() => NotificationFindManySchema)])
      .optional(),
    vote: z.union([z.boolean(), z.lazy(() => VoteFindManySchema)]).optional(),
    voteIDs: z.boolean().optional(),
    followedBy: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    followedByIDs: z.boolean().optional(),
    following: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    followingIDs: z.boolean().optional(),
    bookmarkMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    bookmarkMusicIDs: z.boolean().optional(),
    bookmarkArtists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    bookmarkArtistIDs: z.boolean().optional(),
    bookmarkBands: z
      .union([z.boolean(), z.lazy(() => BandFindManySchema)])
      .optional(),
    bookmarkBandIDs: z.boolean().optional(),
    bookmarkAlbums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    bookmarkAlbumIDs: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
