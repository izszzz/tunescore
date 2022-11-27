import { z } from 'zod';
import { UserCreateWithoutBookmarkArtistsInputObjectSchema } from './UserCreateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkArtistsInput.schema';
import { UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkArtistsInput.schema';
import { UserUpsertWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBookmarkArtistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBookmarkArtistsInput.schema';
import { UserUpdateManyWithWhereWithoutBookmarkArtistsInputObjectSchema } from './UserUpdateManyWithWhereWithoutBookmarkArtistsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutBookmarkArtistsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutBookmarkArtistsInputObjectSchema),
            z
              .lazy(() => UserCreateWithoutBookmarkArtistsInputObjectSchema)
              .array(),
            z.lazy(
              () => UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema,
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
              () => UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema,
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
                UserUpsertWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpsertWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema,
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
                UserUpdateWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema,
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
                UserUpdateManyWithWhereWithoutBookmarkArtistsInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateManyWithWhereWithoutBookmarkArtistsInputObjectSchema,
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

export const UserUncheckedUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema =
  Schema;
