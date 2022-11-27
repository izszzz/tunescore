import { z } from 'zod';
import { PullCreateManyUserInputObjectSchema } from './PullCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => PullCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const PullCreateManyUserInputEnvelopeObjectSchema = Schema;
