import { z } from 'zod';
import { UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';
import { UserCreateOrConnectWithoutPurchasesInputObjectSchema } from './UserCreateOrConnectWithoutPurchasesInput.schema';
import { UserUpsertWithoutPurchasesInputObjectSchema } from './UserUpsertWithoutPurchasesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPurchasesInputObjectSchema } from './UserUpdateWithoutPurchasesInput.schema';
import { UserUncheckedUpdateWithoutPurchasesInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPurchasesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPurchasesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPurchasesInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPurchasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema =
  Schema;
