import { z } from 'zod';
import { UserCreateWithoutMusicsInputObjectSchema } from './UserCreateWithoutMusicsInput.schema';
import { UserUncheckedCreateWithoutMusicsInputObjectSchema } from './UserUncheckedCreateWithoutMusicsInput.schema';
import { UserCreateOrConnectWithoutMusicsInputObjectSchema } from './UserCreateOrConnectWithoutMusicsInput.schema';
import { UserUpsertWithoutMusicsInputObjectSchema } from './UserUpsertWithoutMusicsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMusicsInputObjectSchema } from './UserUpdateWithoutMusicsInput.schema';
import { UserUncheckedUpdateWithoutMusicsInputObjectSchema } from './UserUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutMusicsNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutMusicsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutMusicsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => UserCreateOrConnectWithoutMusicsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => UserUpsertWithoutMusicsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => UserUpdateWithoutMusicsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutMusicsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const UserUpdateOneWithoutMusicsNestedInputObjectSchema = Schema;
