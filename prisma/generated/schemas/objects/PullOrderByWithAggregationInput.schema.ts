import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PullCountOrderByAggregateInputObjectSchema } from './PullCountOrderByAggregateInput.schema';
import { PullMaxOrderByAggregateInputObjectSchema } from './PullMaxOrderByAggregateInput.schema';
import { PullMinOrderByAggregateInputObjectSchema } from './PullMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PullCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PullMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PullMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PullOrderByWithAggregationInputObjectSchema = Schema;
