import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutUserInputObjectSchema } from './PurchaseUpdateWithoutUserInput.schema';
import { PurchaseUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PurchaseUpdateWithoutUserInputObjectSchema),
        z.lazy(() => PurchaseUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
