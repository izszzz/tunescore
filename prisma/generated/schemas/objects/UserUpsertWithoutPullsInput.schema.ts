import { z } from 'zod';
import { UserUpdateWithoutPullsInputObjectSchema } from './UserUpdateWithoutPullsInput.schema';
import { UserUncheckedUpdateWithoutPullsInputObjectSchema } from './UserUncheckedUpdateWithoutPullsInput.schema';
import { UserCreateWithoutPullsInputObjectSchema } from './UserCreateWithoutPullsInput.schema';
import { UserUncheckedCreateWithoutPullsInputObjectSchema } from './UserUncheckedCreateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPullsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPullsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPullsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPullsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPullsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPullsInputObjectSchema = Schema;
