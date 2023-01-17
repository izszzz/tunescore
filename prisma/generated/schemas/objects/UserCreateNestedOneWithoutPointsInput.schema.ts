import { z } from 'zod';
import { UserCreateWithoutPointsInputObjectSchema } from './UserCreateWithoutPointsInput.schema';
import { UserUncheckedCreateWithoutPointsInputObjectSchema } from './UserUncheckedCreateWithoutPointsInput.schema';
import { UserCreateOrConnectWithoutPointsInputObjectSchema } from './UserCreateOrConnectWithoutPointsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPointsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPointsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPointsInputObjectSchema = Schema;
