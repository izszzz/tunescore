import { z } from 'zod';
import { MusicCreateWithoutPurchasesInputObjectSchema } from './MusicCreateWithoutPurchasesInput.schema';
import { MusicUncheckedCreateWithoutPurchasesInputObjectSchema } from './MusicUncheckedCreateWithoutPurchasesInput.schema';
import { MusicCreateOrConnectWithoutPurchasesInputObjectSchema } from './MusicCreateOrConnectWithoutPurchasesInput.schema';
import { MusicUpsertWithoutPurchasesInputObjectSchema } from './MusicUpsertWithoutPurchasesInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutPurchasesInputObjectSchema } from './MusicUpdateWithoutPurchasesInput.schema';
import { MusicUncheckedUpdateWithoutPurchasesInputObjectSchema } from './MusicUncheckedUpdateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneRequiredWithoutPurchasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicCreateWithoutPurchasesInputObjectSchema),
          z.lazy(() => MusicUncheckedCreateWithoutPurchasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MusicCreateOrConnectWithoutPurchasesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MusicUpsertWithoutPurchasesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicUpdateWithoutPurchasesInputObjectSchema),
          z.lazy(() => MusicUncheckedUpdateWithoutPurchasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MusicUpdateOneRequiredWithoutPurchasesNestedInputObjectSchema =
  Schema;
