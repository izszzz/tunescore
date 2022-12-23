import { z } from 'zod';
import { CommentCreateManyPullInputObjectSchema } from './CommentCreateManyPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyPullInputEnvelope> = z
  .object({
    data: z.lazy(() => CommentCreateManyPullInputObjectSchema).array(),
  })
  .strict();

export const CommentCreateManyPullInputEnvelopeObjectSchema = Schema;
