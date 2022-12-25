import { z } from 'zod';
import { FollowFollowerIdFollowingIdCompoundUniqueInputObjectSchema } from './FollowFollowerIdFollowingIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    followerId_followingId: z
      .lazy(() => FollowFollowerIdFollowingIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const FollowWhereUniqueInputObjectSchema = Schema;
