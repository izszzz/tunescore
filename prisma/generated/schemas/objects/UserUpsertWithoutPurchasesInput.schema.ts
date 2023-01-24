import { z } from 'zod';
import { UserUpdateWithoutPurchasesInputObjectSchema } from './UserUpdateWithoutPurchasesInput.schema';
import { UserUncheckedUpdateWithoutPurchasesInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasesInput.schema';
import { UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPurchasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPurchasesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPurchasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPurchasesInputObjectSchema = Schema;
