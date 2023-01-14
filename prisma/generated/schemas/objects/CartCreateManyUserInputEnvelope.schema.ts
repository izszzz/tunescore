import { z } from 'zod';
import { CartCreateManyUserInputObjectSchema } from './CartCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => CartCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const CartCreateManyUserInputEnvelopeObjectSchema = Schema;
