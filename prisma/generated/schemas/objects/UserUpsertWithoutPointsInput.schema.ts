import { z } from 'zod';
import { UserUpdateWithoutPointsInputObjectSchema } from './UserUpdateWithoutPointsInput.schema';
import { UserUncheckedUpdateWithoutPointsInputObjectSchema } from './UserUncheckedUpdateWithoutPointsInput.schema';
import { UserCreateWithoutPointsInputObjectSchema } from './UserCreateWithoutPointsInput.schema';
import { UserUncheckedCreateWithoutPointsInputObjectSchema } from './UserUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPointsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPointsInputObjectSchema = Schema;
