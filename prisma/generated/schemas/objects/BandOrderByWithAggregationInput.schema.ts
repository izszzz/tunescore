import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BandCountOrderByAggregateInputObjectSchema } from './BandCountOrderByAggregateInput.schema';
import { BandMaxOrderByAggregateInputObjectSchema } from './BandMaxOrderByAggregateInput.schema';
import { BandMinOrderByAggregateInputObjectSchema } from './BandMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    artistIDs: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => BandCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => BandMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BandMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BandOrderByWithAggregationInputObjectSchema = Schema;
