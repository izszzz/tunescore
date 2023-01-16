import { z } from 'zod';
import { PurchaseCreateManyUserInputObjectSchema } from './PurchaseCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => PurchaseCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const PurchaseCreateManyUserInputEnvelopeObjectSchema = Schema;
