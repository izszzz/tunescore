import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocalesOrderByInputObjectSchema } from './LocalesOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './BandOrderByWithRelationInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';
import { ArtistOrderByRelationAggregateInputObjectSchema } from './ArtistOrderByRelationAggregateInput.schema';
import { IssueOrderByRelationAggregateInputObjectSchema } from './IssueOrderByRelationAggregateInput.schema';
import { PullOrderByRelationAggregateInputObjectSchema } from './PullOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => LocalesOrderByInputObjectSchema).optional(),
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
    composers: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    composerIDs: z.lazy(() => SortOrderSchema).optional(),
    lyrists: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    lyristIDs: z.lazy(() => SortOrderSchema).optional(),
    artists: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    issues: z
      .lazy(() => IssueOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pulls: z
      .lazy(() => PullOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => BookmarkOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MusicOrderByWithRelationInputObjectSchema = Schema;
