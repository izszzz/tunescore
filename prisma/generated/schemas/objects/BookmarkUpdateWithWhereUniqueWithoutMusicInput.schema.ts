import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutMusicInputObjectSchema } from './BookmarkUpdateWithoutMusicInput.schema';
import { BookmarkUncheckedUpdateWithoutMusicInputObjectSchema } from './BookmarkUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BookmarkUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpdateWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
