import { z } from 'zod';
import { MusicUpdateWithoutPurchasesInputObjectSchema } from './MusicUpdateWithoutPurchasesInput.schema';
import { MusicUncheckedUpdateWithoutPurchasesInputObjectSchema } from './MusicUncheckedUpdateWithoutPurchasesInput.schema';
import { MusicCreateWithoutPurchasesInputObjectSchema } from './MusicCreateWithoutPurchasesInput.schema';
import { MusicUncheckedCreateWithoutPurchasesInputObjectSchema } from './MusicUncheckedCreateWithoutPurchasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutPurchasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutPurchasesInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutPurchasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutPurchasesInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutPurchasesInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutPurchasesInputObjectSchema = Schema;
