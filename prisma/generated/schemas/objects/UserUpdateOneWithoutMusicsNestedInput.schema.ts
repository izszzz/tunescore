import { z } from 'zod';
import { UserCreateWithoutMusicsInputObjectSchema } from './UserCreateWithoutMusicsInput.schema';
import { UserUncheckedCreateWithoutMusicsInputObjectSchema } from './UserUncheckedCreateWithoutMusicsInput.schema';
import { UserCreateOrConnectWithoutMusicsInputObjectSchema } from './UserCreateOrConnectWithoutMusicsInput.schema';
import { UserUpsertWithoutMusicsInputObjectSchema } from './UserUpsertWithoutMusicsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMusicsInputObjectSchema } from './UserUpdateWithoutMusicsInput.schema';
import { UserUncheckedUpdateWithoutMusicsInputObjectSchema } from './UserUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutMusicsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutMusicsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutMusicsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutMusicsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutMusicsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutMusicsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutMusicsNestedInputObjectSchema = Schema;
