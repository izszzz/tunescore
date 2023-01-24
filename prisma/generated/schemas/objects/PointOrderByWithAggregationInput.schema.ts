import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PointCountOrderByAggregateInputObjectSchema } from './PointCountOrderByAggregateInput.schema';
import { PointAvgOrderByAggregateInputObjectSchema } from './PointAvgOrderByAggregateInput.schema';
import { PointMaxOrderByAggregateInputObjectSchema } from './PointMaxOrderByAggregateInput.schema';
import { PointMinOrderByAggregateInputObjectSchema } from './PointMinOrderByAggregateInput.schema';
import { PointSumOrderByAggregateInputObjectSchema } from './PointSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    actionType: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PointCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PointAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PointMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PointMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PointSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PointOrderByWithAggregationInputObjectSchema = Schema;
