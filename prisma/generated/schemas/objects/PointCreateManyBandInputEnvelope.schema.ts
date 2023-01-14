import { z } from 'zod';
import { PointCreateManyBandInputObjectSchema } from './PointCreateManyBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyBandInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyBandInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyBandInputEnvelopeObjectSchema = Schema;
