import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagMapOrderByRelationAggregateInputObjectSchema } from './TagMapOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    tagMap: z
      .lazy(() => TagMapOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
