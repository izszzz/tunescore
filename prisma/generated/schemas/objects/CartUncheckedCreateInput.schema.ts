import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    musicId: z.string(),
  })
  .strict();

export const CartUncheckedCreateInputObjectSchema = Schema;