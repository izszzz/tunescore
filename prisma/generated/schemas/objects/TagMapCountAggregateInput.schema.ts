import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tagId: z.literal(true).optional(),
    resourceId: z.literal(true).optional(),
    resourceType: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const TagMapCountAggregateInputObjectSchema = Schema;
