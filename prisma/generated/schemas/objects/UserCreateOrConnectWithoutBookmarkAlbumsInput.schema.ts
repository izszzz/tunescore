import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookmarkAlbumsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkAlbumsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBookmarkAlbumsInputObjectSchema = Schema;
