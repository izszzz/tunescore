import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    body: z.literal(true).optional(),
    resourceId: z.literal(true).optional(),
    resurceType: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const CommentCountAggregateInputObjectSchema = Schema;
