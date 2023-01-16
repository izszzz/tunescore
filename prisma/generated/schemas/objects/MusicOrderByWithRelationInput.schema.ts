import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocaleOrderByInputObjectSchema } from './LocaleOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';
import { ParticipationOrderByRelationAggregateInputObjectSchema } from './ParticipationOrderByRelationAggregateInput.schema';
import { IssueOrderByRelationAggregateInputObjectSchema } from './IssueOrderByRelationAggregateInput.schema';
import { PullOrderByRelationAggregateInputObjectSchema } from './PullOrderByRelationAggregateInput.schema';
import { CartOrderByRelationAggregateInputObjectSchema } from './CartOrderByRelationAggregateInput.schema';
import { PurchaseOrderByRelationAggregateInputObjectSchema } from './PurchaseOrderByRelationAggregateInput.schema';
import { PointOrderByRelationAggregateInputObjectSchema } from './PointOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';
import { TagMapOrderByRelationAggregateInputObjectSchema } from './TagMapOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => LocaleOrderByInputObjectSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    visibility: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    link: z.lazy(() => LinkListOrderByInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    band: z.lazy(() => BandOrderByWithRelationInputObjectSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    albums: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
    participations: z
      .lazy(() => ParticipationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    issues: z
      .lazy(() => IssueOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullOrderByRelationAggregateInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartOrderByRelationAggregateInputObjectSchema)
      .optional(),
    purchases: z
      .lazy(() => PurchaseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    points: z
      .lazy(() => PointOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    tagMaps: z
      .lazy(() => TagMapOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicOrderByWithRelationInputObjectSchema = Schema;
