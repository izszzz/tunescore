import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    body: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    resourceId: z.literal(true).optional(),
    resourceType: z.literal(true).optional(),
  })
  .strict();

export const CommentMaxAggregateInputObjectSchema = Schema;
