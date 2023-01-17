import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    musicId: z.string(),
  })
  .strict();

export const CartCreateManyUserInputObjectSchema = Schema;
