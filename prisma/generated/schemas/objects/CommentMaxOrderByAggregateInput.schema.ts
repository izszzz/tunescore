import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CommentMaxOrderByAggregateInputObjectSchema = Schema;
