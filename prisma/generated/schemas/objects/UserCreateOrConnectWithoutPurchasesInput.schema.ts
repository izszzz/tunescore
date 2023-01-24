import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPurchasesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPurchasesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPurchasesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPurchasesInputObjectSchema = Schema;
