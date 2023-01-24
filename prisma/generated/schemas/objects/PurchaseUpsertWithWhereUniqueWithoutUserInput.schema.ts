import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutUserInputObjectSchema } from './PurchaseUpdateWithoutUserInput.schema';
import { PurchaseUncheckedUpdateWithoutUserInputObjectSchema } from './PurchaseUncheckedUpdateWithoutUserInput.schema';
import { PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PurchaseUpdateWithoutUserInputObjectSchema),
        z.lazy(() => PurchaseUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema),
        z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
