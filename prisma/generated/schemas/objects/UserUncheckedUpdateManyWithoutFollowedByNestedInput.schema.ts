import { z } from 'zod';
import { UserCreateWithoutFollowedByInputObjectSchema } from './UserCreateWithoutFollowedByInput.schema';
import { UserUncheckedCreateWithoutFollowedByInputObjectSchema } from './UserUncheckedCreateWithoutFollowedByInput.schema';
import { UserCreateOrConnectWithoutFollowedByInputObjectSchema } from './UserCreateOrConnectWithoutFollowedByInput.schema';
import { UserUpsertWithWhereUniqueWithoutFollowedByInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutFollowedByInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutFollowedByInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutFollowedByInput.schema';
import { UserUpdateManyWithWhereWithoutFollowedByInputObjectSchema } from './UserUpdateManyWithWhereWithoutFollowedByInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutFollowedByNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutFollowedByInputObjectSchema),
            z.lazy(() => UserCreateWithoutFollowedByInputObjectSchema).array(),
            z.lazy(() => UserUncheckedCreateWithoutFollowedByInputObjectSchema),
            z
              .lazy(() => UserUncheckedCreateWithoutFollowedByInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => UserCreateOrConnectWithoutFollowedByInputObjectSchema),
            z
              .lazy(() => UserCreateOrConnectWithoutFollowedByInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .union([
            z.lazy(
              () => UserUpsertWithWhereUniqueWithoutFollowedByInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpsertWithWhereUniqueWithoutFollowedByInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => UserUpdateWithWhereUniqueWithoutFollowedByInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateWithWhereUniqueWithoutFollowedByInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => UserUpdateManyWithWhereWithoutFollowedByInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUpdateManyWithWhereWithoutFollowedByInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => UserScalarWhereInputObjectSchema),
            z.lazy(() => UserScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUncheckedUpdateManyWithoutFollowedByNestedInputObjectSchema =
  Schema;
