import { z } from 'zod';
import { PurchaseUserIdMusicIdCompoundUniqueInputObjectSchema } from './PurchaseUserIdMusicIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_musicId: z
      .lazy(() => PurchaseUserIdMusicIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const PurchaseWhereUniqueInputObjectSchema = Schema;
