import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VoteCountOrderByAggregateInputObjectSchema } from './VoteCountOrderByAggregateInput.schema';
import { VoteAvgOrderByAggregateInputObjectSchema } from './VoteAvgOrderByAggregateInput.schema';
import { VoteMaxOrderByAggregateInputObjectSchema } from './VoteMaxOrderByAggregateInput.schema';
import { VoteMinOrderByAggregateInputObjectSchema } from './VoteMinOrderByAggregateInput.schema';
import { VoteSumOrderByAggregateInputObjectSchema } from './VoteSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    end: z.lazy(() => SortOrderSchema).optional(),
    good: z.lazy(() => SortOrderSchema).optional(),
    bad: z.lazy(() => SortOrderSchema).optional(),
    pullId: z.lazy(() => SortOrderSchema).optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VoteCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => VoteAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VoteMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VoteMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VoteSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const VoteOrderByWithAggregationInputObjectSchema = Schema;
