import { z } from 'zod';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithoutMusicInputObjectSchema } from './PurchaseUpdateWithoutMusicInput.schema';
import { PurchaseUncheckedUpdateWithoutMusicInputObjectSchema } from './PurchaseUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUpdateWithWhereUniqueWithoutMusicInput> =
  z
    .object({
      where: z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PurchaseUpdateWithoutMusicInputObjectSchema),
        z.lazy(() => PurchaseUncheckedUpdateWithoutMusicInputObjectSchema),
      ]),
    })
    .strict();

export const PurchaseUpdateWithWhereUniqueWithoutMusicInputObjectSchema =
  Schema;
