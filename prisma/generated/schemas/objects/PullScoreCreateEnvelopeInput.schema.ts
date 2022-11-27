import { z } from 'zod';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreCreateEnvelopeInput> = z
  .object({
    set: z.lazy(() => PullScoreCreateInputObjectSchema).optional(),
  })
  .strict();

export const PullScoreCreateEnvelopeInputObjectSchema = Schema;
