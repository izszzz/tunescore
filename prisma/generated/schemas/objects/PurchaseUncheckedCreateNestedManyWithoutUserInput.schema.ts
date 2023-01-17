import { z } from 'zod';
import { PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';
import { PurchaseCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseCreateOrConnectWithoutUserInput.schema';
import { PurchaseCreateManyUserInputEnvelopeObjectSchema } from './PurchaseCreateManyUserInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema),
          z.lazy(() => PurchaseCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => PurchaseUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => PurchaseCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PurchaseCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PurchaseUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
