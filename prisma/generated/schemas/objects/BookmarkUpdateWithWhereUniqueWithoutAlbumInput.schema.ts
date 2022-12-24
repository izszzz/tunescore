import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutAlbumInputObjectSchema } from './BookmarkUpdateWithoutAlbumInput.schema';
import { BookmarkUncheckedUpdateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BookmarkUpdateWithoutAlbumInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutAlbumInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpdateWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
