import { z } from 'zod';
import { BookmarkCreateManyBandInputObjectSchema } from './BookmarkCreateManyBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyBandInputEnvelope> = z
  .object({
    data: z.lazy(() => BookmarkCreateManyBandInputObjectSchema).array(),
  })
  .strict();

export const BookmarkCreateManyBandInputEnvelopeObjectSchema = Schema;
