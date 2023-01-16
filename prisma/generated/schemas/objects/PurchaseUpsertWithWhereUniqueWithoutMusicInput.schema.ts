import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutMusicInputObjectSchema } from './PurchaseUpdateWithoutMusicInput.schema';
import { PurchaseUncheckedUpdateWithoutMusicInputObjectSchema } from './PurchaseUncheckedUpdateWithoutMusicInput.schema';
import { PurchaseCreateWithoutMusicInputObjectSchema } from './PurchaseCreateWithoutMusicInput.schema';
import { PurchaseUncheckedCreateWithoutMusicInputObjectSchema } from './PurchaseUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpsertWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PurchaseUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => PurchaseUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const PurchaseUpsertWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
