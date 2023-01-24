import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutMusicInputObjectSchema } from './CartUpdateWithoutMusicInput.schema';
import { CartUncheckedUpdateWithoutMusicInputObjectSchema } from './CartUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
