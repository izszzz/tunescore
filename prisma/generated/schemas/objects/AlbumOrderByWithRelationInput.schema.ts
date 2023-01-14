import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocaleOrderByInputObjectSchema } from './LocaleOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';
import { ArtistOrderByRelationAggregateInputObjectSchema } from './ArtistOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';
import { TagMapOrderByRelationAggregateInputObjectSchema } from './TagMapOrderByRelationAggregateInput.schema';
import { PointOrderByRelationAggregateInputObjectSchema } from './PointOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => LocaleOrderByInputObjectSchema).optional(),
    link: z.lazy(() => LinkListOrderByInputObjectSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputObjectSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
    artists: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarks: z
      .lazy(() => BookmarkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapOrderByRelationAggregateInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumOrderByWithRelationInputObjectSchema = Schema;
