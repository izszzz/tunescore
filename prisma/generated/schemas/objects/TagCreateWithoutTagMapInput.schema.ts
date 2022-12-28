import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateWithoutTagMapInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();

export const TagCreateWithoutTagMapInputObjectSchema = Schema;