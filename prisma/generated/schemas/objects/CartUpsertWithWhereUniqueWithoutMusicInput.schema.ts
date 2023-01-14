import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutMusicInputObjectSchema } from './CartUpdateWithoutMusicInput.schema';
import { CartUncheckedUpdateWithoutMusicInputObjectSchema } from './CartUncheckedUpdateWithoutMusicInput.schema';
import { CartCreateWithoutMusicInputObjectSchema } from './CartCreateWithoutMusicInput.schema';
import { CartUncheckedCreateWithoutMusicInputObjectSchema } from './CartUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CartUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutMusicInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
