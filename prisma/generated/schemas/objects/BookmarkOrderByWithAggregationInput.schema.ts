import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BookmarkCountOrderByAggregateInputObjectSchema } from './BookmarkCountOrderByAggregateInput.schema';
import { BookmarkMaxOrderByAggregateInputObjectSchema } from './BookmarkMaxOrderByAggregateInput.schema';
import { BookmarkMinOrderByAggregateInputObjectSchema } from './BookmarkMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
    resourceId: z.lazy(() => SortOrderSchema).optional(),
    resourceType: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BookmarkCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => BookmarkMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => BookmarkMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const BookmarkOrderByWithAggregationInputObjectSchema = Schema;
