import { z } from 'zod';
import { MusicCreateWithoutPurchasesInputObjectSchema } from './MusicCreateWithoutPurchasesInput.schema';
import { MusicUncheckedCreateWithoutPurchasesInputObjectSchema } from './MusicUncheckedCreateWithoutPurchasesInput.schema';
import { MusicCreateOrConnectWithoutPurchasesInputObjectSchema } from './MusicCreateOrConnectWithoutPurchasesInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutPurchasesInput> = z
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
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutPurchasesInputObjectSchema = Schema;
