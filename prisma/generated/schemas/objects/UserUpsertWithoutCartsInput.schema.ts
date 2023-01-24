import { z } from 'zod';
import { UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema';
import { UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCartsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCartsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCartsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCartsInputObjectSchema = Schema;
