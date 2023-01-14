import { z } from 'zod';
import { UserCreateNestedOneWithoutCartsInputObjectSchema } from './UserCreateNestedOneWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCartsInputObjectSchema),
  })
  .strict();

export const CartCreateWithoutMusicInputObjectSchema = Schema;
