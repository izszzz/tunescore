import { z } from 'zod';
import { UserUpdateWithoutMusicsInputObjectSchema } from './UserUpdateWithoutMusicsInput.schema';
import { UserUncheckedUpdateWithoutMusicsInputObjectSchema } from './UserUncheckedUpdateWithoutMusicsInput.schema';
import { UserCreateWithoutMusicsInputObjectSchema } from './UserCreateWithoutMusicsInput.schema';
import { UserUncheckedCreateWithoutMusicsInputObjectSchema } from './UserUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMusicsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutMusicsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutMusicsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutMusicsInputObjectSchema = Schema;
