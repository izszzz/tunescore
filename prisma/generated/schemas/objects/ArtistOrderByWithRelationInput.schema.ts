import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocalesOrderByInputObjectSchema } from './LocalesOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';
import { BandOrderByRelationAggregateInputObjectSchema } from './BandOrderByRelationAggregateInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';
import { BookmarkOrderByRelationAggregateInputObjectSchema } from './BookmarkOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => LocalesOrderByInputObjectSchema).optional(),
    link: z.lazy(() => LinkListOrderByInputObjectSchema).optional(),
    writtenMusics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    writtenMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    composedMusics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    composedMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
    bands: z
      .lazy(() => BandOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bandIDs: z.lazy(() => SortOrderSchema).optional(),
    albums: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
    bookmarks: z
      .lazy(() => BookmarkOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistOrderByWithRelationInputObjectSchema = Schema;
