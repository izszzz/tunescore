import { z } from 'zod';
import { UserCreateWithoutBookmarkBandsInputObjectSchema } from './UserCreateWithoutBookmarkBandsInput.schema';
import { UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkBandsInput.schema';
import { UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkBandsInput.schema';
import { UserUpsertWithWhereUniqueWithoutBookmarkBandsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBookmarkBandsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBookmarkBandsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBookmarkBandsInput.schema';
import { UserUpdateManyWithWhereWithoutBookmarkBandsInputObjectSchema } from './UserUpdateManyWithWhereWithoutBookmarkBandsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutBookmarkBandsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema),
            z
              .lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema)
              .array(),
            z.lazy(
              () => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema,
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
              () => UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema,
            ),
            z
              .lazy(
                () => UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema,
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
                UserUpsertWithWhereUniqueWithoutBookmarkBandsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpsertWithWhereUniqueWithoutBookmarkBandsInputObjectSchema,
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
                UserUpdateWithWhereUniqueWithoutBookmarkBandsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateWithWhereUniqueWithoutBookmarkBandsInputObjectSchema,
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
                UserUpdateManyWithWhereWithoutBookmarkBandsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateManyWithWhereWithoutBookmarkBandsInputObjectSchema,
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

export const UserUncheckedUpdateManyWithoutBookmarkBandsNestedInputObjectSchema =
  Schema;
