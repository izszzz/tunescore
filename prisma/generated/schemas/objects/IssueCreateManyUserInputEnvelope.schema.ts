import { z } from 'zod';
import { IssueCreateManyUserInputObjectSchema } from './IssueCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => IssueCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const IssueCreateManyUserInputEnvelopeObjectSchema = Schema;
