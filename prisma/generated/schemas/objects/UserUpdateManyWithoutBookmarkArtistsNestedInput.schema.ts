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

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutBookmarkArtistsNestedInput> =
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
              () => UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema,
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
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
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutBookmarkArtistsNestedInputObjectSchema =
  Schema;
