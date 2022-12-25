import { z } from 'zod';
import { NotificationCreateNestedManyWithoutFollowedInputObjectSchema } from './NotificationCreateNestedManyWithoutFollowedInput.schema';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowingInputObjectSchema } from './UserCreateNestedOneWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateInput> = z
  .object({
    id: z.string().optional(),
    notifications: z
      .lazy(() => NotificationCreateNestedManyWithoutFollowedInputObjectSchema)
      .optional(),
    follower: z.lazy(
      () => UserCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
    following: z.lazy(
      () => UserCreateNestedOneWithoutFollowingInputObjectSchema,
    ),
  })
  .strict();

export const FollowCreateInputObjectSchema = Schema;
