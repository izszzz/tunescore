import { z } from 'zod';
import { AccountFindManySchema } from '../findManyAccount.schema';
import { SessionFindManySchema } from '../findManySession.schema';
import { MusicFindManySchema } from '../findManyMusic.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
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
    followedBy: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    following: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    bookmarkMusics: z
      .union([z.boolean(), z.lazy(() => MusicFindManySchema)])
      .optional(),
    bookmarkArtists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    bookmarkBands: z
      .union([z.boolean(), z.lazy(() => BandFindManySchema)])
      .optional(),
    bookmarkAlbums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
