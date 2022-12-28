import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutTagMapInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();

export const TagUncheckedCreateWithoutTagMapInputObjectSchema = Schema;
