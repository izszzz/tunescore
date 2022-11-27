import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreOrderByInput> = z
  .object({
    original: z.lazy(() => SortOrderSchema).optional(),
    changed: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PullScoreOrderByInputObjectSchema = Schema;
