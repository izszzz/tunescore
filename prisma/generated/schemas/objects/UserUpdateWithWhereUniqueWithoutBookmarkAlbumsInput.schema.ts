import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkAlbumsInputObjectSchema } from './UserUpdateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkAlbumsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkAlbumsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema =
  Schema;
