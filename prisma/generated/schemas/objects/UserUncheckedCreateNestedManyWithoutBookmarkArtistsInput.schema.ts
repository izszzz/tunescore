import { z } from 'zod';
import { UserCreateWithoutBookmarkArtistsInputObjectSchema } from './UserCreateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkArtistsInput.schema';
import { UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkArtistsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBookmarkArtistsInput> =
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
        connect: z
          .union([
            z.lazy(() => UserWhereUniqueInputObjectSchema),
            z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const UserUncheckedCreateNestedManyWithoutBookmarkArtistsInputObjectSchema =
  Schema;
