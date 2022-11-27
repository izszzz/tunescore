import { z } from 'zod';
import { UserCreateWithoutPullsInputObjectSchema } from './UserCreateWithoutPullsInput.schema';
import { UserUncheckedCreateWithoutPullsInputObjectSchema } from './UserUncheckedCreateWithoutPullsInput.schema';
import { UserCreateOrConnectWithoutPullsInputObjectSchema } from './UserCreateOrConnectWithoutPullsInput.schema';
import { UserUpsertWithoutPullsInputObjectSchema } from './UserUpsertWithoutPullsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPullsInputObjectSchema } from './UserUpdateWithoutPullsInput.schema';
import { UserUncheckedUpdateWithoutPullsInputObjectSchema } from './UserUncheckedUpdateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPullsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutPullsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutPullsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutPullsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutPullsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => UserUpdateWithoutPullsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutPullsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUpdateOneRequiredWithoutPullsNestedInputObjectSchema = Schema;
