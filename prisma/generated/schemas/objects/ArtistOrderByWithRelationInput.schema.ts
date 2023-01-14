import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocaleOrderByInputObjectSchema } from './LocaleOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { BandOrderByRelationAggregateInputObjectSchema } from './BandOrderByRelationAggregateInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';
import { ParticipationOrderByRelationAggregateInputObjectSchema } from './ParticipationOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';
import { TagMapOrderByRelationAggregateInputObjectSchema } from './TagMapOrderByRelationAggregateInput.schema';
import { PointOrderByRelationAggregateInputObjectSchema } from './PointOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => LocaleOrderByInputObjectSchema).optional(),
    link: z.lazy(() => LinkListOrderByInputObjectSchema).optional(),
    bands: z
      .lazy(() => BandOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bandIDs: z.lazy(() => SortOrderSchema).optional(),
    albums: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
    participations: z
      .lazy(() => ParticipationOrderByRelationAggregateInputObjectSchema)
      .optional(),
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

export const ArtistOrderByWithRelationInputObjectSchema = Schema;
