import { z } from 'zod';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { ParticipationFindManySchema } from '../findManyParticipation.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { PointFindManySchema } from '../findManyPoint.schema';
import { ArtistCountOutputTypeArgsObjectSchema } from './ArtistCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    link: z.boolean().optional(),
    bands: z.union([z.boolean(), z.lazy(() => BandFindManySchema)]).optional(),
    bandIDs: z.boolean().optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    albumIDs: z.boolean().optional(),
    participations: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    tagMaps: z
      .union([z.boolean(), z.lazy(() => TagMapFindManySchema)])
      .optional(),
    points: z
      .union([z.boolean(), z.lazy(() => PointFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtistSelectObjectSchema = Schema;
