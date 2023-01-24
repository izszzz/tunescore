import { z } from 'zod';
import { CartCreateManyMusicInputObjectSchema } from './CartCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => CartCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const CartCreateManyMusicInputEnvelopeObjectSchema = Schema;
