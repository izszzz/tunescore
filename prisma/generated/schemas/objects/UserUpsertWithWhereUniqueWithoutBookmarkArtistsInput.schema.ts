import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkArtistsInputObjectSchema } from './UserUpdateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkArtistsInput.schema';
import { UserCreateWithoutBookmarkArtistsInputObjectSchema } from './UserCreateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutBookmarkArtistsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkArtistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutBookmarkArtistsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutBookmarkArtistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutBookmarkArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema =
  Schema;
