import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocaleObjectEqualityInput> = z
  .object({
    ja: z.string().optional().nullable(),
    en: z.string().optional().nullable(),
  })
  .strict();

export const LocaleObjectEqualityInputObjectSchema = Schema;
