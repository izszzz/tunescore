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
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
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
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutBookmarkMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateManyWithWhereWithoutBookmarkMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutBookmarkMusicsNestedInputObjectSchema =
  Schema;
