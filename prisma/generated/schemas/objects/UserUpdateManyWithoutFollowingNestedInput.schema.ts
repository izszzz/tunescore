import { z } from 'zod';
import { UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserUpsertWithWhereUniqueWithoutFollowingInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutFollowingInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutFollowingInput.schema';
import { UserUpdateManyWithWhereWithoutFollowingInputObjectSchema } from './UserUpdateManyWithWhereWithoutFollowingInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutFollowingNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => UserCreateWithoutFollowingInputObjectSchema),
            z.lazy(() => UserCreateWithoutFollowingInputObjectSchema).array(),
            z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema),
            z
              .lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema),
            z
              .lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema)
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
              () => UserUpsertWithWhereUniqueWithoutFollowingInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpsertWithWhereUniqueWithoutFollowingInputObjectSchema,
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
              () => UserUpdateWithWhereUniqueWithoutFollowingInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  UserUpdateWithWhereUniqueWithoutFollowingInputObjectSchema,
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
              () => UserUpdateManyWithWhereWithoutFollowingInputObjectSchema,
            ),
            z
              .lazy(
                () => UserUpdateManyWithWhereWithoutFollowingInputObjectSchema,
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

export const UserUpdateManyWithoutFollowingNestedInputObjectSchema = Schema;
