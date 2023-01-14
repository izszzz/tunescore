import { z } from 'zod';
import { UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';
import { UserCreateOrConnectWithoutCartsInputObjectSchema } from './UserCreateOrConnectWithoutCartsInput.schema';
import { UserUpsertWithoutCartsInputObjectSchema } from './UserUpsertWithoutCartsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCartsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutCartsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutCartsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutCartsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutCartsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema = Schema;
