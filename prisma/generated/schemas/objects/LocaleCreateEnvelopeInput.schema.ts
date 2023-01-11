import { z } from 'zod';
import { LocaleCreateInputObjectSchema } from './LocaleCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocaleCreateEnvelopeInput> = z
  .object({
    set: z.lazy(() => LocaleCreateInputObjectSchema).optional(),
  })
  .strict();

export const LocaleCreateEnvelopeInputObjectSchema = Schema;
