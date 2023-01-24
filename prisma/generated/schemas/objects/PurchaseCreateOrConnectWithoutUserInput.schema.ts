import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema),
      z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const PurchaseCreateOrConnectWithoutUserInputObjectSchema = Schema;
