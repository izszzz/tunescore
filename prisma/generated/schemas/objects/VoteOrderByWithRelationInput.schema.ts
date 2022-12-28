import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PullOrderByWithRelationInputObjectSchema } from './PullOrderByWithRelationInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    end: z.lazy(() => SortOrderSchema).optional(),
    good: z.lazy(() => SortOrderSchema).optional(),
    bad: z.lazy(() => SortOrderSchema).optional(),
    pull: z.lazy(() => PullOrderByWithRelationInputObjectSchema).optional(),
    pullId: z.lazy(() => SortOrderSchema).optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userIDs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VoteOrderByWithRelationInputObjectSchema = Schema;