import { z } from 'zod';
import { LocalesCreateInputObjectSchema } from './LocalesCreateInput.schema';
import { LocalesUpdateInputObjectSchema } from './LocalesUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocalesUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => LocalesCreateInputObjectSchema).optional(),
    update: z.lazy(() => LocalesUpdateInputObjectSchema).optional(),
  })
  .strict();

export const LocalesUpdateEnvelopeInputObjectSchema = Schema;
