import { z } from 'zod';
import { BookmarkCreateManyMusicInputObjectSchema } from './BookmarkCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => BookmarkCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const BookmarkCreateManyMusicInputEnvelopeObjectSchema = Schema;
