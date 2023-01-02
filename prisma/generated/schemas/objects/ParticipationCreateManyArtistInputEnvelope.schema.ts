import { z } from 'zod';
import { ParticipationCreateManyArtistInputObjectSchema } from './ParticipationCreateManyArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateManyArtistInputEnvelope> = z
  .object({
    data: z.lazy(() => ParticipationCreateManyArtistInputObjectSchema).array(),
  })
  .strict();

export const ParticipationCreateManyArtistInputEnvelopeObjectSchema = Schema;
