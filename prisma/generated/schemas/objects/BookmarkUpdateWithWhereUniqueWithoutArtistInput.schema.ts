import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutArtistInputObjectSchema } from './BookmarkUpdateWithoutArtistInput.schema';
import { BookmarkUncheckedUpdateWithoutArtistInputObjectSchema } from './BookmarkUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BookmarkUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
