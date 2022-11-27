import { z } from 'zod';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocalesCreateEnvelopeInput> = z
  .object({
    set: z.lazy(() => LocalesCreateInputObjectSchema).optional(),
  })
  .strict();

export const LocalesCreateEnvelopeInputObjectSchema = Schema;
