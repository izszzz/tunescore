import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutBookmarksInputObjectSchema } from './AlbumUpdateWithoutBookmarksInput.schema';
import { AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const AlbumUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
