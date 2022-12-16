import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    body: z.literal(true).optional(),
    musicId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const IssueMaxAggregateInputObjectSchema = Schema;