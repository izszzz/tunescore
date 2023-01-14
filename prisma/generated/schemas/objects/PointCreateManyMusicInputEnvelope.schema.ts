import { z } from 'zod';
import { PointCreateManyMusicInputObjectSchema } from './PointCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyMusicInputEnvelopeObjectSchema = Schema;
