import { z } from 'zod';
import { PointCreateManyUserInputObjectSchema } from './PointCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyUserInputEnvelopeObjectSchema = Schema;
