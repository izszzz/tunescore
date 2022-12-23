import { z } from 'zod';
import { CommentCreateManyIssueInputObjectSchema } from './CommentCreateManyIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateManyIssueInputEnvelope> = z
  .object({
    data: z.lazy(() => CommentCreateManyIssueInputObjectSchema).array(),
  })
  .strict();

export const CommentCreateManyIssueInputEnvelopeObjectSchema = Schema;
