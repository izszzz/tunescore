import { z } from 'zod';
import { MusicCreateManyUserInputObjectSchema } from './MusicCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => MusicCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const MusicCreateManyUserInputEnvelopeObjectSchema = Schema;
