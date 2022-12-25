import { z } from 'zod';
import { NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutFollowedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowUncheckedCreateWithoutFollowingInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(
        () =>
          NotificationUncheckedCreateNestedManyWithoutFollowedInputObjectSchema,
      )
      .optional(),
    followerId: z.string(),
  })
  .strict();

export const FollowUncheckedCreateWithoutFollowingInputObjectSchema = Schema;
