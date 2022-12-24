import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkUpdateWithoutArtistInputObjectSchema } from './BookmarkUpdateWithoutArtistInput.schema';
import { BookmarkUncheckedUpdateWithoutArtistInputObjectSchema } from './BookmarkUncheckedUpdateWithoutArtistInput.schema';
import { BookmarkCreateWithoutArtistInputObjectSchema } from './BookmarkCreateWithoutArtistInput.schema';
import { BookmarkUncheckedCreateWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BookmarkUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => BookmarkUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BookmarkCreateWithoutArtistInputObjectSchema),
        z.lazy(() => BookmarkUncheckedCreateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict();

export const BookmarkUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
