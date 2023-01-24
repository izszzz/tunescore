import { z } from 'zod';
import { MusicUpdateOneRequiredWithoutCartsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutCartsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutUserInput> = z
  .object({
    music: z
      .lazy(() => MusicUpdateOneRequiredWithoutCartsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CartUpdateWithoutUserInputObjectSchema = Schema;
