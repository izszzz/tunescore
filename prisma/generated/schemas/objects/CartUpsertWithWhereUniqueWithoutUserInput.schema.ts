import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutUserInputObjectSchema } from './CartUpdateWithoutUserInput.schema';
import { CartUncheckedUpdateWithoutUserInputObjectSchema } from './CartUncheckedUpdateWithoutUserInput.schema';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CartUpdateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutUserInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
