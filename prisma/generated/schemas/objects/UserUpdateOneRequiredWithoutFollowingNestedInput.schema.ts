import { z } from 'zod';
import { UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserUpsertWithoutFollowingInputObjectSchema } from './UserUpsertWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutFollowingInputObjectSchema } from './UserUpdateWithoutFollowingInput.schema';
import { UserUncheckedUpdateWithoutFollowingInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutFollowingInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutFollowingInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutFollowingInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutFollowingInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema =
  Schema;
