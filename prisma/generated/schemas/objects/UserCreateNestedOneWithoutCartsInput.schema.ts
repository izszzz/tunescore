import { z } from 'zod';
import { UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';
import { UserCreateOrConnectWithoutCartsInputObjectSchema } from './UserCreateOrConnectWithoutCartsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCartsInputObjectSchema = Schema;
