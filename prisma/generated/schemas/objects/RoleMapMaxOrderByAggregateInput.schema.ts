import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    participationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleMapMaxOrderByAggregateInputObjectSchema = Schema;
