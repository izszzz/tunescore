import { z } from 'zod';
import { UserCreateWithoutPointsInputObjectSchema } from './UserCreateWithoutPointsInput.schema';
import { UserUncheckedCreateWithoutPointsInputObjectSchema } from './UserUncheckedCreateWithoutPointsInput.schema';
import { UserCreateOrConnectWithoutPointsInputObjectSchema } from './UserCreateOrConnectWithoutPointsInput.schema';
import { UserUpsertWithoutPointsInputObjectSchema } from './UserUpsertWithoutPointsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPointsInputObjectSchema } from './UserUpdateWithoutPointsInput.schema';
import { UserUncheckedUpdateWithoutPointsInputObjectSchema } from './UserUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPointsNestedInput> =
  z
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
      upsert: z.lazy(() => UserUpsertWithoutPointsInputObjectSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutPointsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPointsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPointsNestedInputObjectSchema = Schema;
