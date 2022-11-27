import { z } from 'zod';
import { MusicCreateManyBandInputObjectSchema } from './MusicCreateManyBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateManyBandInputEnvelope> = z
  .object({
    data: z.lazy(() => MusicCreateManyBandInputObjectSchema).array(),
  })
  .strict();

export const MusicCreateManyBandInputEnvelopeObjectSchema = Schema;
