import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutMusicInputObjectSchema } from './BookmarkUpdateWithoutMusicInput.schema';
import { BookmarkUncheckedUpdateWithoutMusicInputObjectSchema } from './BookmarkUncheckedUpdateWithoutMusicInput.schema';
import { BookmarkCreateWithoutMusicInputObjectSchema } from './BookmarkCreateWithoutMusicInput.schema';
import { BookmarkUncheckedCreateWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpsertWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BookmarkUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BookmarkCreateWithoutMusicInputObjectSchema),
        z.lazy(() => BookmarkUncheckedCreateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpsertWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
