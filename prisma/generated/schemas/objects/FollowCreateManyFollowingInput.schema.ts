import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateManyFollowingInput> = z
  .object({
    id: z.string().optional(),
    followerId: z.string(),
  })
  .strict();

export const FollowCreateManyFollowingInputObjectSchema = Schema;
