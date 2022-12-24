import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArtistCountOrderByAggregateInputObjectSchema } from './ArtistCountOrderByAggregateInput.schema';
import { ArtistMaxOrderByAggregateInputObjectSchema } from './ArtistMaxOrderByAggregateInput.schema';
import { ArtistMinOrderByAggregateInputObjectSchema } from './ArtistMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    writtenMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    composedMusicsIDs: z.lazy(() => SortOrderSchema).optional(),
    musicIDs: z.lazy(() => SortOrderSchema).optional(),
    bandIDs: z.lazy(() => SortOrderSchema).optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ArtistCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ArtistMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ArtistMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ArtistOrderByWithAggregationInputObjectSchema = Schema;
