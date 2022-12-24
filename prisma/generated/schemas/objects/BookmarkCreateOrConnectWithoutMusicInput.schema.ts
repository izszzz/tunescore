import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkCreateWithoutMusicInputObjectSchema } from './BookmarkCreateWithoutMusicInput.schema';
import { BookmarkUncheckedCreateWithoutMusicInputObjectSchema } from './BookmarkUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookmarkCreateWithoutMusicInputObjectSchema),
      z.lazy(() => BookmarkUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const BookmarkCreateOrConnectWithoutMusicInputObjectSchema = Schema;
