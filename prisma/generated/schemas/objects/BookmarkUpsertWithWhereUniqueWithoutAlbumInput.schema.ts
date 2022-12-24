import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutAlbumInputObjectSchema } from './BookmarkUpdateWithoutAlbumInput.schema';
import { BookmarkUncheckedUpdateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedUpdateWithoutAlbumInput.schema';
import { BookmarkCreateWithoutAlbumInputObjectSchema } from './BookmarkCreateWithoutAlbumInput.schema';
import { BookmarkUncheckedCreateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpsertWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BookmarkUpdateWithoutAlbumInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutAlbumInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BookmarkCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => BookmarkUncheckedCreateWithoutAlbumInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpsertWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
