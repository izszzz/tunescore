import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutBookmarksInputObjectSchema } from './ArtistUpdateWithoutBookmarksInput.schema';
import { ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema } from './ArtistUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
