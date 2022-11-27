import { z } from 'zod';
import { AlbumCreateManyBandInputObjectSchema } from './AlbumCreateManyBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateManyBandInputEnvelope> = z
  .object({
    data: z.lazy(() => AlbumCreateManyBandInputObjectSchema).array(),
  })
  .strict();

export const AlbumCreateManyBandInputEnvelopeObjectSchema = Schema;
