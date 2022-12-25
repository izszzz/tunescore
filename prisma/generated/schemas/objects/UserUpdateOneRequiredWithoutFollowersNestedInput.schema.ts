import { z } from 'zod';
import { UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';
import { UserCreateOrConnectWithoutFollowersInputObjectSchema } from './UserCreateOrConnectWithoutFollowersInput.schema';
import { UserUpsertWithoutFollowersInputObjectSchema } from './UserUpsertWithoutFollowersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFollowersInputObjectSchema } from './UserUpdateWithoutFollowersInput.schema';
import { UserUncheckedUpdateWithoutFollowersInputObjectSchema } from './UserUncheckedUpdateWithoutFollowersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowersInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutFollowersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutFollowersInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFollowersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema =
  Schema;
