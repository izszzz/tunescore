import { z } from 'zod';
import { PurchaseCreateManyMusicInputObjectSchema } from './PurchaseCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => PurchaseCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const PurchaseCreateManyMusicInputEnvelopeObjectSchema = Schema;
