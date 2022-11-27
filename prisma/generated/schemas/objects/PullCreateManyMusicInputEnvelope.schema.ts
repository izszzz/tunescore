import { z } from 'zod';
import { PullCreateManyMusicInputObjectSchema } from './PullCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => PullCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const PullCreateManyMusicInputEnvelopeObjectSchema = Schema;
