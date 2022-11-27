import { z } from 'zod';
import { IssueCreateManyMusicInputObjectSchema } from './IssueCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => IssueCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const IssueCreateManyMusicInputEnvelopeObjectSchema = Schema;
