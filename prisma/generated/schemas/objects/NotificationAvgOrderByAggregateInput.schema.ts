import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationAvgOrderByAggregateInput> = z
  .object({
    resourceId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const NotificationAvgOrderByAggregateInputObjectSchema = Schema;
