import { z } from 'zod';
import { UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCartsNestedInput.schema';
import { MusicUpdateOneRequiredWithoutCartsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutCartsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema)
      .optional(),
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutCartsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateInputObjectSchema = Schema;
