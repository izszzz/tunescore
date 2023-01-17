import { z } from 'zod';
import { PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema';
import { PurchaseUpdateManyMutationInputObjectSchema } from './PurchaseUpdateManyMutationInput.schema';
import { PurchaseUncheckedUpdateManyWithoutPurchasesInputObjectSchema } from './PurchaseUncheckedUpdateManyWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => PurchaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PurchaseUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => PurchaseUncheckedUpdateManyWithoutPurchasesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
