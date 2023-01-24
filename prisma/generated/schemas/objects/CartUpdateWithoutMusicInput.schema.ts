import { z } from 'zod';
import { UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCartsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutMusicInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutMusicInputObjectSchema = Schema;
