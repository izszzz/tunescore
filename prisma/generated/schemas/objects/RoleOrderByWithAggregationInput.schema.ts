import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleCountOrderByAggregateInputObjectSchema } from './RoleCountOrderByAggregateInput.schema';
import { RoleMaxOrderByAggregateInputObjectSchema } from './RoleMaxOrderByAggregateInput.schema';
import { RoleMinOrderByAggregateInputObjectSchema } from './RoleMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RoleCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RoleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoleOrderByWithAggregationInputObjectSchema = Schema;
