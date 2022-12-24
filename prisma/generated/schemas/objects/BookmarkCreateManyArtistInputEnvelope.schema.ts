import { z } from 'zod';
import { BookmarkCreateManyArtistInputObjectSchema } from './BookmarkCreateManyArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyArtistInputEnvelope> = z
  .object({
    data: z.lazy(() => BookmarkCreateManyArtistInputObjectSchema).array(),
  })
  .strict();

export const BookmarkCreateManyArtistInputEnvelopeObjectSchema = Schema;
