import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocalesOrderByInputObjectSchema } from './LocalesOrderByInput.schema';
import { LinkListOrderByInputObjectSchema } from './LinkListOrderByInput.schema';
import { MusicOrderByRelationAggregateInputObjectSchema } from './MusicOrderByRelationAggregateInput.schema';
import { ArtistOrderByRelationAggregateInputObjectSchema } from './ArtistOrderByRelationAggregateInput.schema';
import { AlbumOrderByRelationAggregateInputObjectSchema } from './AlbumOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => LocalesOrderByInputObjectSchema).optional(),
    link: z.lazy(() => LinkListOrderByInputObjectSchema).optional(),
    musics: z
      .lazy(() => MusicOrderByRelationAggregateInputObjectSchema)
      .optional(),
    artists: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    albums: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    bookmarks: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BandOrderByWithRelationInputObjectSchema = Schema;
