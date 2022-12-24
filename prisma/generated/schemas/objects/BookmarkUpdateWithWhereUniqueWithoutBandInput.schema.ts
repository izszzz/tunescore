import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutBandInputObjectSchema } from './BookmarkUpdateWithoutBandInput.schema';
import { BookmarkUncheckedUpdateWithoutBandInputObjectSchema } from './BookmarkUncheckedUpdateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateWithWhereUniqueWithoutBandInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BookmarkUpdateWithoutBandInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutBandInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpdateWithWhereUniqueWithoutBandInputObjectSchema = Schema;
