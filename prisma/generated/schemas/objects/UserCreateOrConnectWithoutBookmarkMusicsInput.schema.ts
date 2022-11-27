import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBookmarkMusicsInputObjectSchema } from './UserCreateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookmarkMusicsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema = Schema;
