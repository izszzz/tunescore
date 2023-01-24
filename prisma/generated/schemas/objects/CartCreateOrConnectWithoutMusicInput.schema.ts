import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutMusicInputObjectSchema } from './CartCreateWithoutMusicInput.schema';
import { CartUncheckedCreateWithoutMusicInputObjectSchema } from './CartUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutMusicInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutMusicInputObjectSchema = Schema;
