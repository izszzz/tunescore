import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocalesCreateInput> = z
  .object({
    ja: z.string().optional().nullable(),
    en: z.string().optional().nullable(),
  })
  .strict();

export const LocalesCreateInputObjectSchema = Schema;
