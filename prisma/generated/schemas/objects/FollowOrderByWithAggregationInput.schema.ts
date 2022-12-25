import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FollowCountOrderByAggregateInputObjectSchema } from './FollowCountOrderByAggregateInput.schema';
import { FollowMaxOrderByAggregateInputObjectSchema } from './FollowMaxOrderByAggregateInput.schema';
import { FollowMinOrderByAggregateInputObjectSchema } from './FollowMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    followerId: z.lazy(() => SortOrderSchema).optional(),
    followingId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FollowCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => FollowMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FollowMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const FollowOrderByWithAggregationInputObjectSchema = Schema;
