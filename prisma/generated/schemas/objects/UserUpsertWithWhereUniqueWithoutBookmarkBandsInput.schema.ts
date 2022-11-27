import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkBandsInputObjectSchema } from './UserUpdateWithoutBookmarkBandsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkBandsInput.schema';
import { UserCreateWithoutBookmarkBandsInputObjectSchema } from './UserCreateWithoutBookmarkBandsInput.schema';
import { UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBookmarkBandsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkBandsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutBookmarkBandsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBookmarkBandsInputObjectSchema =
  Schema;
