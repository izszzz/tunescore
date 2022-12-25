import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateManyFollowerInput> = z
  .object({
    id: z.string().optional(),
    followingId: z.string(),
  })
  .strict();

export const FollowCreateManyFollowerInputObjectSchema = Schema;
