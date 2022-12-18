import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    end: z.lazy(() => SortOrderSchema).optional(),
    good: z.lazy(() => SortOrderSchema).optional(),
    bad: z.lazy(() => SortOrderSchema).optional(),
    pullId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VoteMinOrderByAggregateInputObjectSchema = Schema;
