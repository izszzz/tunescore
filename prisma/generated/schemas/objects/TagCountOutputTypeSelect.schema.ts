import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z
  .object({
    tagMap: z.boolean().optional(),
  })
  .strict();

export const TagCountOutputTypeSelectObjectSchema = Schema;
