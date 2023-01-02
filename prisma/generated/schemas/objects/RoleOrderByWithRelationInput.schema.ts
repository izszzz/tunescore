import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleMapOrderByRelationAggregateInputObjectSchema } from './RoleMapOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    roleMap: z
      .lazy(() => RoleMapOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
