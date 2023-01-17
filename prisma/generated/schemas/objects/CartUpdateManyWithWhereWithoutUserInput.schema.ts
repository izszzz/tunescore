import { z } from 'zod';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';
import { CartUpdateManyMutationInputObjectSchema } from './CartUpdateManyMutationInput.schema';
import { CartUncheckedUpdateManyWithoutCartsInputObjectSchema } from './CartUncheckedUpdateManyWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => CartScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateManyMutationInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateManyWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
