import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBookmarkArtistsInputObjectSchema } from './UserCreateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookmarkArtistsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkArtistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBookmarkArtistsInputObjectSchema =
  Schema;
