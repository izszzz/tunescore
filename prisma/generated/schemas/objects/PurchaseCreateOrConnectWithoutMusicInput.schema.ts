import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseCreateWithoutMusicInputObjectSchema } from './PurchaseCreateWithoutMusicInput.schema';
import { PurchaseUncheckedCreateWithoutMusicInputObjectSchema } from './PurchaseUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema),
      z.lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const PurchaseCreateOrConnectWithoutMusicInputObjectSchema = Schema;
