import { z } from 'zod';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';
import { LocaleUpdateInputObjectSchema } from './LocaleUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocaleUpdateEnvelopeInput> = z
  .object({
    set: z.lazy(() => LocaleCreateInputObjectSchema).optional(),
    update: z.lazy(() => LocaleUpdateInputObjectSchema).optional(),
  })
  .strict();

export const LocaleUpdateEnvelopeInputObjectSchema = Schema;
