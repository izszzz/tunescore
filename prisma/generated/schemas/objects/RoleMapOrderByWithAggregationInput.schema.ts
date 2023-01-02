import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleMapCountOrderByAggregateInputObjectSchema } from './RoleMapCountOrderByAggregateInput.schema';
import { RoleMapMaxOrderByAggregateInputObjectSchema } from './RoleMapMaxOrderByAggregateInput.schema';
import { RoleMapMinOrderByAggregateInputObjectSchema } from './RoleMapMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    participationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoleMapCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => RoleMapMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoleMapMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoleMapOrderByWithAggregationInputObjectSchema = Schema;
