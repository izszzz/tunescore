import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutBandInputObjectSchema } from './BookmarkUpdateWithoutBandInput.schema';
import { BookmarkUncheckedUpdateWithoutBandInputObjectSchema } from './BookmarkUncheckedUpdateWithoutBandInput.schema';
import { BookmarkCreateWithoutBandInputObjectSchema } from './BookmarkCreateWithoutBandInput.schema';
import { BookmarkUncheckedCreateWithoutBandInputObjectSchema } from './BookmarkUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpsertWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BookmarkUpdateWithoutBandInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutBandInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BookmarkCreateWithoutBandInputObjectSchema),
        z.lazy(() => BookmarkUncheckedCreateWithoutBandInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpsertWithWhereUniqueWithoutBandInputObjectSchema = Schema;
