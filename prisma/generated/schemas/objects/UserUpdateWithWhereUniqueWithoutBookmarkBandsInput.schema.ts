import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkBandsInputObjectSchema } from './UserUpdateWithoutBookmarkBandsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBookmarkBandsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkBandsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkBandsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBookmarkBandsInputObjectSchema =
  Schema;
