import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUserIdMusicIdCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    musicId: z.string(),
  })
  .strict();

export const CartUserIdMusicIdCompoundUniqueInputObjectSchema = Schema;
