import { z } from 'zod';
import { UserCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkAlbumsInput.schema';
import { UserCreateOrConnectWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkAlbumsInput.schema';
import { UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInput.schema';
import { UserUpdateManyWithWhereWithoutBookmarkAlbumsInputObjectSchema } from './UserUpdateManyWithWhereWithoutBookmarkAlbumsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutBookmarkAlbumsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutBookmarkAlbumsInputObjectSchema),
          z
            .lazy(() => UserCreateWithoutBookmarkAlbumsInputObjectSchema)
            .array(),
          z.lazy(
            () => UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutBookmarkAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutBookmarkAlbumsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema,
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
              UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutBookmarkAlbumsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutBookmarkAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateManyWithWhereWithoutBookmarkAlbumsInputObjectSchema,
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

export const UserUpdateManyWithoutBookmarkAlbumsNestedInputObjectSchema =
  Schema;
