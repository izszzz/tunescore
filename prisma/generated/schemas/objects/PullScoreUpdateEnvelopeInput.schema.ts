import { z } from 'zod';
import { PullScoreCreateInputObjectSchema } from './PullScoreCreateInput.schema';
import { PullScoreUpdateInputObjectSchema } from './PullScoreUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullScoreUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => PullScoreCreateInputObjectSchema).optional(),
    update: z.lazy(() => PullScoreUpdateInputObjectSchema).optional(),
  })
  .strict();

export const PullScoreUpdateEnvelopeInputObjectSchema = Schema;
