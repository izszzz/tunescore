import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutBookmarksInputObjectSchema } from './AlbumUpdateWithoutBookmarksInput.schema';
import { AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedUpdateWithoutBookmarksInput.schema';
import { AlbumCreateWithoutBookmarksInputObjectSchema } from './AlbumCreateWithoutBookmarksInput.schema';
import { AlbumUncheckedCreateWithoutBookmarksInputObjectSchema } from './AlbumUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AlbumCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const AlbumUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
