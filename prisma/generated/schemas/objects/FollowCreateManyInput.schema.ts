import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateManyInput> = z
  .object({
    id: z.string().optional(),
    followerId: z.string(),
    followingId: z.string(),
  })
  .strict();

export const FollowCreateManyInputObjectSchema = Schema;
