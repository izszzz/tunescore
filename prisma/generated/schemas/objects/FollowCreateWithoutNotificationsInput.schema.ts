import { z } from 'zod';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowingInputObjectSchema } from './UserCreateNestedOneWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowCreateWithoutNotificationsInput> = z
  .object({
    id: z.string().optional(),
    follower: z.lazy(
      () => UserCreateNestedOneWithoutFollowersInputObjectSchema,
    ),
    following: z.lazy(
      () => UserCreateNestedOneWithoutFollowingInputObjectSchema,
    ),
  })
  .strict();

export const FollowCreateWithoutNotificationsInputObjectSchema = Schema;
