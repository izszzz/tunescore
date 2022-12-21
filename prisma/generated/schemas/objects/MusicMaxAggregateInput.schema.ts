import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    score: z.literal(true).optional(),
    visibility: z.literal(true).optional(),
    price: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    bandId: z.literal(true).optional(),
  })
  .strict();

export const MusicMaxAggregateInputObjectSchema = Schema;
