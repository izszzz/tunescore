import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookmarkArtistsInputObjectSchema } from './UserUpdateWithoutBookmarkArtistsInput.schema';
import { UserUncheckedUpdateWithoutBookmarkArtistsInputObjectSchema } from './UserUncheckedUpdateWithoutBookmarkArtistsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutBookmarkArtistsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutBookmarkArtistsInputObjectSchema),
        z.lazy(
          () => UserUncheckedUpdateWithoutBookmarkArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutBookmarkArtistsInputObjectSchema =
  Schema;
