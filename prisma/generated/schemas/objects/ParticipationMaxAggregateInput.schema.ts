import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
    musicId: z.literal(true).optional(),
  })
  .strict();

export const ParticipationMaxAggregateInputObjectSchema = Schema;
