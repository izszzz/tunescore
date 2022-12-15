import { z } from 'zod';
import { UserCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateWithoutBookmarkAlbumsInput.schema';
import { UserUncheckedCreateWithoutBookmarkAlbumsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkAlbumsInput.schema';
import { UserCreateOrConnectWithoutBookmarkAlbumsInputObjectSchema } from './UserCreateOrConnectWithoutBookmarkAlbumsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutBookmarkAlbumsInput> =
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
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutBookmarkAlbumsInputObjectSchema =
  Schema;
