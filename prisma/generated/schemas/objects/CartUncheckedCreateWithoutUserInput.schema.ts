import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    musicId: z.string(),
  })
  .strict();

export const CartUncheckedCreateWithoutUserInputObjectSchema = Schema;
