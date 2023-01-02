import { z } from 'zod';
import { ParticipationCreateManyMusicInputObjectSchema } from './ParticipationCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => ParticipationCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const ParticipationCreateManyMusicInputEnvelopeObjectSchema = Schema;
