import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MusicCountOrderByAggregateInputObjectSchema } from './MusicCountOrderByAggregateInput.schema';
import { MusicMaxOrderByAggregateInputObjectSchema } from './MusicMaxOrderByAggregateInput.schema';
import { MusicMinOrderByAggregateInputObjectSchema } from './MusicMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    score: z.lazy(() => SortOrderSchema).optional(),
    visibility: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    bandId: z.lazy(() => SortOrderSchema).optional(),
    albumIDs: z.lazy(() => SortOrderSchema).optional(),
    composerIDs: z.lazy(() => SortOrderSchema).optional(),
    lyristIDs: z.lazy(() => SortOrderSchema).optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MusicCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MusicMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MusicMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MusicOrderByWithAggregationInputObjectSchema = Schema;
