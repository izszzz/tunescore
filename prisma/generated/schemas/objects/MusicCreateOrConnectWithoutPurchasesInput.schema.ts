import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutPurchasesInputObjectSchema } from './MusicCreateWithoutPurchasesInput.schema';
import { MusicUncheckedCreateWithoutPurchasesInputObjectSchema } from './MusicUncheckedCreateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutPurchasesInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPurchasesInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPurchasesInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutPurchasesInputObjectSchema = Schema;
