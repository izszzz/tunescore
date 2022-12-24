import { z } from 'zod';
import { BookmarkWhereUniqueInputObjectSchema } from './BookmarkWhereUniqueInput.schema';
import { BookmarkCreateWithoutArtistInputObjectSchema } from './BookmarkCreateWithoutArtistInput.schema';
import { BookmarkUncheckedCreateWithoutArtistInputObjectSchema } from './BookmarkUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => BookmarkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BookmarkCreateWithoutArtistInputObjectSchema),
      z.lazy(() => BookmarkUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const BookmarkCreateOrConnectWithoutArtistInputObjectSchema = Schema;
