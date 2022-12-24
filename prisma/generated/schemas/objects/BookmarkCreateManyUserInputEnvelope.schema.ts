import { z } from 'zod';
import { BookmarkCreateManyUserInputObjectSchema } from './BookmarkCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BookmarkCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => BookmarkCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const BookmarkCreateManyUserInputEnvelopeObjectSchema = Schema;
