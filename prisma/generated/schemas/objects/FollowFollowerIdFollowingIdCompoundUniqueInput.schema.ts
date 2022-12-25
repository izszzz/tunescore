import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowFollowerIdFollowingIdCompoundUniqueInput> =
  z
    .object({
      followerId: z.string(),
      followingId: z.string(),
    })
    .strict();

export const FollowFollowerIdFollowingIdCompoundUniqueInputObjectSchema =
  Schema;
