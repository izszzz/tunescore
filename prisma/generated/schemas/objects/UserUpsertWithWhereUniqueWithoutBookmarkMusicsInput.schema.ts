import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkMusicsInputObjectSchema } from './UserUpdateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkMusicsInput.schema';
import { UserCreateWithoutBookmarkMusicsInputObjectSchema } from './UserCreateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBookmarkMusicsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkMusicsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema =
  Schema;
