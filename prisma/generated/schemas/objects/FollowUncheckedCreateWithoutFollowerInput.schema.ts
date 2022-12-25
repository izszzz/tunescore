import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedCreateWithoutFollowerInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema,
      )
      .optional(),
    followingId: z.string(),
  })
  .strict();

export const FollowUncheckedCreateWithoutFollowerInputObjectSchema = Schema;
