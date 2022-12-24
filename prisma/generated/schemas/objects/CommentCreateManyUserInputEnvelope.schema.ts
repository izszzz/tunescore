import { z } from 'zod';
import { CommentCreateManyUserInputObjectSchema } from './CommentCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => CommentCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const CommentCreateManyUserInputEnvelopeObjectSchema = Schema;
