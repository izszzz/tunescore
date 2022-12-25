import { z } from 'zod';
import { UserUpdateWithoutFollowingInputObjectSchema } from './UserUpdateWithoutFollowingInput.schema';
import { UserUncheckedUpdateWithoutFollowingInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingInput.schema';
import { UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutFollowingInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFollowingInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFollowingInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFollowingInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutFollowingInputObjectSchema = Schema;
