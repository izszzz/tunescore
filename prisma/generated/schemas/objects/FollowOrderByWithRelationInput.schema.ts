import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    notifications: z
      .lazy(() => NotificationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    follower: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    followerId: z.lazy(() => SortOrderSchema).optional(),
    following: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    followingId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const FollowOrderByWithRelationInputObjectSchema = Schema;
