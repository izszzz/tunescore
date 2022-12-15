import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkAlbumsInputObjectSchema } from './UserUpdateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkAlbumsInput.schema';
import { UserCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkAlbumsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkAlbumsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkAlbumsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema =
  Schema;
