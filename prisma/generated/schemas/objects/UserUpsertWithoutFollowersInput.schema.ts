import { z } from 'zod';
import { UserUpdateWithoutFollowersInputObjectSchema } from './UserUpdateWithoutFollowersInput.schema';
import { UserUncheckedUpdateWithoutFollowersInputObjectSchema } from './UserUncheckedUpdateWithoutFollowersInput.schema';
import { UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutFollowersInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFollowersInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFollowersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFollowersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutFollowersInputObjectSchema = Schema;
