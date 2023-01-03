import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { IssueCountOrderByAggregateInputObjectSchema } from './IssueCountOrderByAggregateInput.schema';
import { IssueMaxOrderByAggregateInputObjectSchema } from './IssueMaxOrderByAggregateInput.schema';
import { IssueMinOrderByAggregateInputObjectSchema } from './IssueMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    musicId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => IssueCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => IssueMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => IssueMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const IssueOrderByWithAggregationInputObjectSchema = Schema;
