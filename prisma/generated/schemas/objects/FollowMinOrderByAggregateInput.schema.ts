import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    followerId: z.lazy(() => SortOrderSchema).optional(),
    followingId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FollowMinOrderByAggregateInputObjectSchema = Schema;
