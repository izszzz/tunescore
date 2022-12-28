import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagMapCountOrderByAggregateInputObjectSchema } from './TagMapCountOrderByAggregateInput.schema';
import { TagMapMaxOrderByAggregateInputObjectSchema } from './TagMapMaxOrderByAggregateInput.schema';
import { TagMapMinOrderByAggregateInputObjectSchema } from './TagMapMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TagMapCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => TagMapMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TagMapMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TagMapOrderByWithAggregationInputObjectSchema = Schema;
