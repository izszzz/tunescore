import { z } from 'zod';
import { UserCreateWithoutPullsInputObjectSchema } from './UserCreateWithoutPullsInput.schema';
import { UserUncheckedCreateWithoutPullsInputObjectSchema } from './UserUncheckedCreateWithoutPullsInput.schema';
import { UserCreateOrConnectWithoutPullsInputObjectSchema } from './UserCreateOrConnectWithoutPullsInput.schema';
import { UserUpsertWithoutPullsInputObjectSchema } from './UserUpsertWithoutPullsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPullsInputObjectSchema } from './UserUpdateWithoutPullsInput.schema';
import { UserUncheckedUpdateWithoutPullsInputObjectSchema } from './UserUncheckedUpdateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPullsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPullsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPullsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutPullsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutPullsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutPullsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPullsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutPullsNestedInputObjectSchema = Schema;
