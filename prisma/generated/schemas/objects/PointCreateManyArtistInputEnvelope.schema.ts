import { z } from 'zod';
import { PointCreateManyArtistInputObjectSchema } from './PointCreateManyArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateManyArtistInputEnvelope> = z
  .object({
    data: z.lazy(() => PointCreateManyArtistInputObjectSchema).array(),
  })
  .strict();

export const PointCreateManyArtistInputEnvelopeObjectSchema = Schema;
