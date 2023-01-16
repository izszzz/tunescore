import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { ParticipationFindManySchema } from '../findManyParticipation.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { CartFindManySchema } from '../findManyCart.schema';
import { PurchaseFindManySchema } from '../findManyPurchase.schema';
import { PointFindManySchema } from '../findManyPoint.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { MusicCountOutputTypeArgsObjectSchema } from './MusicCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    participations: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    carts: z.union([z.boolean(), z.lazy(() => CartFindManySchema)]).optional(),
    purchases: z
      .union([z.boolean(), z.lazy(() => PurchaseFindManySchema)])
      .optional(),
    points: z
      .union([z.boolean(), z.lazy(() => PointFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    tagMaps: z
      .union([z.boolean(), z.lazy(() => TagMapFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => MusicCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const MusicIncludeObjectSchema = Schema;
