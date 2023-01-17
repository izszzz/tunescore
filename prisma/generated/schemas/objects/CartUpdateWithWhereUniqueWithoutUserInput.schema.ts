import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutUserInputObjectSchema } from './CartUpdateWithoutUserInput.schema';
import { CartUncheckedUpdateWithoutUserInputObjectSchema } from './CartUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
