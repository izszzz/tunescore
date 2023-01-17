import { z } from 'zod';
import { UserCreateNestedOneWithoutCartsInputObjectSchema } from './UserCreateNestedOneWithoutCartsInput.schema';
import { MusicCreateNestedOneWithoutCartsInputObjectSchema } from './MusicCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCartsInputObjectSchema),
    music: z.lazy(() => MusicCreateNestedOneWithoutCartsInputObjectSchema),
  })
  .strict();

export const CartCreateInputObjectSchema = Schema;
