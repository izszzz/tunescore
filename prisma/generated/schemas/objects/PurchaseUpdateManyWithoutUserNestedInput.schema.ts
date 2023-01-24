import { z } from 'zod';
import { PurchaseCreateWithoutUserInputObjectSchema } from './PurchaseCreateWithoutUserInput.schema';
import { PurchaseUncheckedCreateWithoutUserInputObjectSchema } from './PurchaseUncheckedCreateWithoutUserInput.schema';
import { PurchaseCreateOrConnectWithoutUserInputObjectSchema } from './PurchaseCreateOrConnectWithoutUserInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PurchaseUpsertWithWhereUniqueWithoutUserInput.schema';
import { PurchaseCreateManyUserInputEnvelopeObjectSchema } from './PurchaseCreateManyUserInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PurchaseUpdateWithWhereUniqueWithoutUserInput.schema';
import { PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema } from './PurchaseUpdateManyWithWhereWithoutUserInput.schema';
import { PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => PurchaseUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PurchaseCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => PurchaseUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => PurchaseUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PurchaseScalarWhereInputObjectSchema),
        z.lazy(() => PurchaseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PurchaseUpdateManyWithoutUserNestedInputObjectSchema = Schema;
