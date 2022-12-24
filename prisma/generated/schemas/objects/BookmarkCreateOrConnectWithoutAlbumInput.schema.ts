import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkCreateWithoutAlbumInputObjectSchema } from './BookmarkCreateWithoutAlbumInput.schema';
import { BookmarkUncheckedCreateWithoutAlbumInputObjectSchema } from './BookmarkUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateOrConnectWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookmarkCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => BookmarkUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const BookmarkCreateOrConnectWithoutAlbumInputObjectSchema = Schema;
