import { z } from 'zod';
import { PurchaseCreateWithoutMusicInputObjectSchema } from './PurchaseCreateWithoutMusicInput.schema';
import { PurchaseUncheckedCreateWithoutMusicInputObjectSchema } from './PurchaseUncheckedCreateWithoutMusicInput.schema';
import { PurchaseCreateOrConnectWithoutMusicInputObjectSchema } from './PurchaseCreateOrConnectWithoutMusicInput.schema';
import { PurchaseCreateManyMusicInputEnvelopeObjectSchema } from './PurchaseCreateManyMusicInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateNestedManyWithoutMusicInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema).array(),
        z.lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema),
        z
          .lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PurchaseCreateOrConnectWithoutMusicInputObjectSchema),
        z
          .lazy(() => PurchaseCreateOrConnectWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PurchaseCreateManyMusicInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
        z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PurchaseCreateNestedManyWithoutMusicInputObjectSchema = Schema;
