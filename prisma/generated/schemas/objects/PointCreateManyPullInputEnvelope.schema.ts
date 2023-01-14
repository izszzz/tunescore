import { z } from 'zod';
import { PointCreateManyPullInputObjectSchema } from './PointCreateManyPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyPullInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyPullInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyPullInputEnvelopeObjectSchema = Schema;
