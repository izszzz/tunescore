import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userIDs: z.literal(true).optional(),
    resourceId: z.literal(true).optional(),
    resourceType: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BookmarkCountAggregateInputObjectSchema = Schema;
