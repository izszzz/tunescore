import { z } from 'zod';
import { UserCreateWithoutPurchasesInputObjectSchema } from './UserCreateWithoutPurchasesInput.schema';
import { UserUncheckedCreateWithoutPurchasesInputObjectSchema } from './UserUncheckedCreateWithoutPurchasesInput.schema';
import { UserCreateOrConnectWithoutPurchasesInputObjectSchema } from './UserCreateOrConnectWithoutPurchasesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPurchasesInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPurchasesInputObjectSchema = Schema;
