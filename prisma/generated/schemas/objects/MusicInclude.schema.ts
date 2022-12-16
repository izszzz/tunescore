import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { ArtistFindManySchema } from '../findManyArtist.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { MusicCountOutputTypeArgsObjectSchema } from './MusicCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    composers: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    lyrists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    artists: z
      .union([z.boolean(), z.lazy(() => ArtistFindManySchema)])
      .optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => UserFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => MusicCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const MusicIncludeObjectSchema = Schema;