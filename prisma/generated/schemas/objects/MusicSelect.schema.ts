import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { BandArgsObjectSchema } from './BandArgs.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { ParticipationFindManySchema } from '../findManyParticipation.schema';
import { IssueFindManySchema } from '../findManyIssue.schema';
import { PullFindManySchema } from '../findManyPull.schema';
import { CartFindManySchema } from '../findManyCart.schema';
import { PointFindManySchema } from '../findManyPoint.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { MusicCountOutputTypeArgsObjectSchema } from './MusicCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    title: z.boolean().optional(),
    score: z.boolean().optional(),
    visibility: z.boolean().optional(),
    price: z.boolean().optional(),
    link: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    band: z.union([z.boolean(), z.lazy(() => BandArgsObjectSchema)]).optional(),
    bandId: z.boolean().optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    albumIDs: z.boolean().optional(),
    participations: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    issues: z
      .union([z.boolean(), z.lazy(() => IssueFindManySchema)])
      .optional(),
    pulls: z.union([z.boolean(), z.lazy(() => PullFindManySchema)]).optional(),
    carts: z.union([z.boolean(), z.lazy(() => CartFindManySchema)]).optional(),
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

export const MusicSelectObjectSchema = Schema;
