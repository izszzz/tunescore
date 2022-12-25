import { z } from 'zod';
import { NotificationCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationCreateNestedManyWithoutFollowedInput.schema';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateWithoutFollowingInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(() => NotificationCreateNestedManyWithoutFollowedInputObjectSchema)
      .optional(),
    follower: z.lazy(
      () => UserCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
  })
  .strict();

export const FollowCreateWithoutFollowingInputObjectSchema = Schema;
