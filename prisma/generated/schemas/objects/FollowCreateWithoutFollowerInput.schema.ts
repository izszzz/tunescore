import { z } from 'zod';
import { NotificationCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationCreateNestedManyWithoutFollowedInput.schema';
import { UserCreateNestedOneWithoutFollowingInputObjectSchema } from './UserCreateNestedOneWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateWithoutFollowerInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(() => NotificationCreateNestedManyWithoutFollowedInputObjectSchema)
      .optional(),
    following: z.lazy(
      () => UserCreateNestedOneWithoutFollowingInputObjectSchema,
    ),
  })
  .strict();

export const FollowCreateWithoutFollowerInputObjectSchema = Schema;
