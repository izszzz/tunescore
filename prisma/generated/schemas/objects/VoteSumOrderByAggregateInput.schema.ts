import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteSumOrderByAggregateInput> = z
  .object({
    good: z.lazy(() => SortOrderSchema).optional(),
    bad: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VoteSumOrderByAggregateInputObjectSchema = Schema;
