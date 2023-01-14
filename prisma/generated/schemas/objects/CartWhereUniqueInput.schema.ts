import { z } from 'zod';
import { CartUserIdMusicIdCompoundUniqueInputObjectSchema } from './CartUserIdMusicIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_musicId: z
      .lazy(() => CartUserIdMusicIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartWhereUniqueInputObjectSchema = Schema;
