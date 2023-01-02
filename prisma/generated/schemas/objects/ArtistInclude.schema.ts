import { z } from 'zod';
import { ParticipationFindManySchema } from '../findManyParticipation.schema';
import { BandFindManySchema } from '../findManyBand.schema';
import { AlbumFindManySchema } from '../findManyAlbum.schema';
import { BookmarkFindManySchema } from '../findManyBookmark.schema';
import { TagMapFindManySchema } from '../findManyTagMap.schema';
import { ArtistCountOutputTypeArgsObjectSchema } from './ArtistCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistInclude> = z
  .object({
    participations: z
      .union([z.boolean(), z.lazy(() => ParticipationFindManySchema)])
      .optional(),
    bands: z.union([z.boolean(), z.lazy(() => BandFindManySchema)]).optional(),
    albums: z
      .union([z.boolean(), z.lazy(() => AlbumFindManySchema)])
      .optional(),
    bookmarks: z
      .union([z.boolean(), z.lazy(() => BookmarkFindManySchema)])
      .optional(),
    tagMaps: z
      .union([z.boolean(), z.lazy(() => TagMapFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ArtistCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ArtistIncludeObjectSchema = Schema;
