import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema,
      )
      .optional(),
    followerId: z.string(),
    followingId: z.string(),
  })
  .strict();

export const FollowUncheckedCreateInputObjectSchema = Schema;
