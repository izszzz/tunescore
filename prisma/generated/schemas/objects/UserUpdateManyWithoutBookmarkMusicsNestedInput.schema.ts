import { z } from 'zod';
import { UserCreateWithoutBookmarkMusicsInputObjectSchema } from './UserCreateWithoutBookmarkMusicsInput.schema';
import { UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkMusicsInput.schema';
import { UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkMusicsInput.schema';
import { UserUpsertWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBookmarkMusicsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBookmarkMusicsInput.schema';
import { UserUpdateManyWithWhereWithoutBookmarkMusicsInputObjectSchema } from './UserUpdateManyWithWhereWithoutBookmarkMusicsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutBookmarkMusicsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema),
            z
              .lazy(() => UserCreateWithoutBookmarkMusicsInputObjectSchema)
              .array(),
            z.lazy(
              () => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUncheckedCreateWithoutBookmarkMusicsInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () => UserCreateOrConnectWithoutBookmarkMusicsInputObjectSchema,
              )
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
              () =>
                UserUpsertWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpsertWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema,
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
              () =>
                UserUpdateWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateWithWhereUniqueWithoutBookmarkMusicsInputObjectSchema,
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
              () =>
                UserUpdateManyWithWhereWithoutBookmarkMusicsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateManyWithWhereWithoutBookmarkMusicsInputObjectSchema,
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

export const UserUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema =
  Schema;
