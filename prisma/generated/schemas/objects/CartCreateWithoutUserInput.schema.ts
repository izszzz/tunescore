import { z } from 'zod';
import { MusicCreateNestedOneWithoutCartsInputObjectSchema } from './MusicCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    music: z.lazy(() => MusicCreateNestedOneWithoutCartsInputObjectSchema),
  })
  .strict();

export const CartCreateWithoutUserInputObjectSchema = Schema;
