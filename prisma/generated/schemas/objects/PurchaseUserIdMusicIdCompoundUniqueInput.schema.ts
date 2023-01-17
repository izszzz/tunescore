import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUserIdMusicIdCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    musicId: z.string(),
  })
  .strict();

export const PurchaseUserIdMusicIdCompoundUniqueInputObjectSchema = Schema;
