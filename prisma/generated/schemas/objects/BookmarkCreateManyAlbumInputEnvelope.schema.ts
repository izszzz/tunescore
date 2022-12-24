import { z } from 'zod';
import { BookmarkCreateManyAlbumInputObjectSchema } from './BookmarkCreateManyAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyAlbumInputEnvelope> = z
  .object({
    data: z.lazy(() => BookmarkCreateManyAlbumInputObjectSchema).array(),
  })
  .strict();

export const BookmarkCreateManyAlbumInputEnvelopeObjectSchema = Schema;
