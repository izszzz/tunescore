import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkMusicsInputObjectSchema } from './UserUpdateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBookmarkMusicsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkMusicsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema =
  Schema;
